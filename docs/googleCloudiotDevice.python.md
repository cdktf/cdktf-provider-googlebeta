# `google_cloudiot_device`

Refer to the Terraform Registory for docs: [`google_cloudiot_device`](https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device).

# `googleCloudiotDevice` Submodule <a name="`googleCloudiotDevice` Submodule" id="@cdktf/provider-google-beta.googleCloudiotDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudiotDevice <a name="GoogleCloudiotDevice" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device google_cloudiot_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDevice(
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
  registry: str,
  blocked: typing.Union[bool, IResolvable] = None,
  credentials: typing.Union[IResolvable, typing.List[GoogleCloudiotDeviceCredentials]] = None,
  gateway_config: GoogleCloudiotDeviceGatewayConfig = None,
  id: str = None,
  log_level: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: GoogleCloudiotDeviceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.registry">registry</a></code> | <code>str</code> | The name of the device registry where this device should be created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.blocked">blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a device is blocked, connections or requests from this device will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.credentials">credentials</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]</code> | credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.gatewayConfig">gateway_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata key-value pairs assigned to the device. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.name"></a>

- *Type:* str

A unique name for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#name GoogleCloudiotDevice#name}

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.registry"></a>

- *Type:* str

The name of the device registry where this device should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#registry GoogleCloudiotDevice#registry}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.blocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a device is blocked, connections or requests from this device will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#blocked GoogleCloudiotDevice#blocked}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.credentials"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#credentials GoogleCloudiotDevice#credentials}

---

##### `gateway_config`<sup>Optional</sup> <a name="gateway_config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.gatewayConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#gateway_config GoogleCloudiotDevice#gateway_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.logLevel"></a>

- *Type:* str

The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#log_level GoogleCloudiotDevice#log_level}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The metadata key-value pairs assigned to the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#metadata GoogleCloudiotDevice#metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#timeouts GoogleCloudiotDevice#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig">put_gateway_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetBlocked">reset_blocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetGatewayConfig">reset_gateway_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_credentials` <a name="put_credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials"></a>

```python
def put_credentials(
  value: typing.Union[IResolvable, typing.List[GoogleCloudiotDeviceCredentials]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]

---

##### `put_gateway_config` <a name="put_gateway_config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig"></a>

```python
def put_gateway_config(
  gateway_auth_method: str = None,
  gateway_type: str = None
) -> None
```

###### `gateway_auth_method`<sup>Optional</sup> <a name="gateway_auth_method" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig.parameter.gatewayAuthMethod"></a>

- *Type:* str

Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#gateway_auth_method GoogleCloudiotDevice#gateway_auth_method}

---

###### `gateway_type`<sup>Optional</sup> <a name="gateway_type" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig.parameter.gatewayType"></a>

- *Type:* str

Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#gateway_type GoogleCloudiotDevice#gateway_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#create GoogleCloudiotDevice#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#delete GoogleCloudiotDevice#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#update GoogleCloudiotDevice#update}.

---

##### `reset_blocked` <a name="reset_blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetBlocked"></a>

```python
def reset_blocked() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_gateway_config` <a name="reset_gateway_config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetGatewayConfig"></a>

```python
def reset_gateway_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDevice.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDevice.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDevice.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList">GoogleCloudiotDeviceConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList">GoogleCloudiotDeviceCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfig">gateway_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference">GoogleCloudiotDeviceGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigAckTime">last_config_ack_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigSendTime">last_config_send_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorStatus">last_error_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList">GoogleCloudiotDeviceLastErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorTime">last_error_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastEventTime">last_event_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastHeartbeatTime">last_heartbeat_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastStateTime">last_state_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.numId">num_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList">GoogleCloudiotDeviceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference">GoogleCloudiotDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blockedInput">blocked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentialsInput">credentials_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfigInput">gateway_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registryInput">registry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blocked">blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registry">registry</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.config"></a>

```python
config: GoogleCloudiotDeviceConfigAList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList">GoogleCloudiotDeviceConfigAList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentials"></a>

```python
credentials: GoogleCloudiotDeviceCredentialsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList">GoogleCloudiotDeviceCredentialsList</a>

---

##### `gateway_config`<sup>Required</sup> <a name="gateway_config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfig"></a>

```python
gateway_config: GoogleCloudiotDeviceGatewayConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference">GoogleCloudiotDeviceGatewayConfigOutputReference</a>

---

##### `last_config_ack_time`<sup>Required</sup> <a name="last_config_ack_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigAckTime"></a>

```python
last_config_ack_time: str
```

- *Type:* str

---

##### `last_config_send_time`<sup>Required</sup> <a name="last_config_send_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigSendTime"></a>

```python
last_config_send_time: str
```

- *Type:* str

---

##### `last_error_status`<sup>Required</sup> <a name="last_error_status" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorStatus"></a>

```python
last_error_status: GoogleCloudiotDeviceLastErrorStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList">GoogleCloudiotDeviceLastErrorStatusList</a>

---

##### `last_error_time`<sup>Required</sup> <a name="last_error_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorTime"></a>

```python
last_error_time: str
```

- *Type:* str

---

##### `last_event_time`<sup>Required</sup> <a name="last_event_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastEventTime"></a>

```python
last_event_time: str
```

- *Type:* str

---

##### `last_heartbeat_time`<sup>Required</sup> <a name="last_heartbeat_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastHeartbeatTime"></a>

```python
last_heartbeat_time: str
```

- *Type:* str

---

##### `last_state_time`<sup>Required</sup> <a name="last_state_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastStateTime"></a>

```python
last_state_time: str
```

- *Type:* str

---

##### `num_id`<sup>Required</sup> <a name="num_id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.numId"></a>

```python
num_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.state"></a>

```python
state: GoogleCloudiotDeviceStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList">GoogleCloudiotDeviceStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeouts"></a>

```python
timeouts: GoogleCloudiotDeviceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference">GoogleCloudiotDeviceTimeoutsOutputReference</a>

---

##### `blocked_input`<sup>Optional</sup> <a name="blocked_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blockedInput"></a>

```python
blocked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentialsInput"></a>

```python
credentials_input: typing.Union[IResolvable, typing.List[GoogleCloudiotDeviceCredentials]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]

---

##### `gateway_config_input`<sup>Optional</sup> <a name="gateway_config_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfigInput"></a>

```python
gateway_config_input: GoogleCloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `registry_input`<sup>Optional</sup> <a name="registry_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registryInput"></a>

```python
registry_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudiotDeviceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>]

---

##### `blocked`<sup>Required</sup> <a name="blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blocked"></a>

```python
blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registry"></a>

```python
registry: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudiotDeviceConfig <a name="GoogleCloudiotDeviceConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  registry: str,
  blocked: typing.Union[bool, IResolvable] = None,
  credentials: typing.Union[IResolvable, typing.List[GoogleCloudiotDeviceCredentials]] = None,
  gateway_config: GoogleCloudiotDeviceGatewayConfig = None,
  id: str = None,
  log_level: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: GoogleCloudiotDeviceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.name">name</a></code> | <code>str</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.registry">registry</a></code> | <code>str</code> | The name of the device registry where this device should be created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.blocked">blocked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a device is blocked, connections or requests from this device will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.credentials">credentials</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]</code> | credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.gatewayConfig">gateway_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.logLevel">log_level</a></code> | <code>str</code> | The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata key-value pairs assigned to the device. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#name GoogleCloudiotDevice#name}

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.registry"></a>

```python
registry: str
```

- *Type:* str

The name of the device registry where this device should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#registry GoogleCloudiotDevice#registry}

---

##### `blocked`<sup>Optional</sup> <a name="blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.blocked"></a>

```python
blocked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a device is blocked, connections or requests from this device will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#blocked GoogleCloudiotDevice#blocked}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.credentials"></a>

```python
credentials: typing.Union[IResolvable, typing.List[GoogleCloudiotDeviceCredentials]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#credentials GoogleCloudiotDevice#credentials}

---

##### `gateway_config`<sup>Optional</sup> <a name="gateway_config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.gatewayConfig"></a>

```python
gateway_config: GoogleCloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#gateway_config GoogleCloudiotDevice#gateway_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#log_level GoogleCloudiotDevice#log_level}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The metadata key-value pairs assigned to the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#metadata GoogleCloudiotDevice#metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudiotDeviceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#timeouts GoogleCloudiotDevice#timeouts}

---

### GoogleCloudiotDeviceConfigA <a name="GoogleCloudiotDeviceConfigA" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceConfigA()
```


### GoogleCloudiotDeviceCredentials <a name="GoogleCloudiotDeviceCredentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceCredentials(
  public_key: GoogleCloudiotDeviceCredentialsPublicKey,
  expiration_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.publicKey">public_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | public_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.expirationTime">expiration_time</a></code> | <code>str</code> | The time at which this credential becomes invalid. |

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.publicKey"></a>

```python
public_key: GoogleCloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#public_key GoogleCloudiotDevice#public_key}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

The time at which this credential becomes invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#expiration_time GoogleCloudiotDevice#expiration_time}

---

### GoogleCloudiotDeviceCredentialsPublicKey <a name="GoogleCloudiotDeviceCredentialsPublicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey(
  format: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.format">format</a></code> | <code>str</code> | The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.key">key</a></code> | <code>str</code> | The key data. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.format"></a>

```python
format: str
```

- *Type:* str

The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#format GoogleCloudiotDevice#format}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.key"></a>

```python
key: str
```

- *Type:* str

The key data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#key GoogleCloudiotDevice#key}

---

### GoogleCloudiotDeviceGatewayConfig <a name="GoogleCloudiotDeviceGatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig(
  gateway_auth_method: str = None,
  gateway_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayAuthMethod">gateway_auth_method</a></code> | <code>str</code> | Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayType">gateway_type</a></code> | <code>str</code> | Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"]. |

---

##### `gateway_auth_method`<sup>Optional</sup> <a name="gateway_auth_method" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayAuthMethod"></a>

```python
gateway_auth_method: str
```

- *Type:* str

Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#gateway_auth_method GoogleCloudiotDevice#gateway_auth_method}

---

##### `gateway_type`<sup>Optional</sup> <a name="gateway_type" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayType"></a>

```python
gateway_type: str
```

- *Type:* str

Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#gateway_type GoogleCloudiotDevice#gateway_type}

---

### GoogleCloudiotDeviceLastErrorStatus <a name="GoogleCloudiotDeviceLastErrorStatus" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus()
```


### GoogleCloudiotDeviceState <a name="GoogleCloudiotDeviceState" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceState()
```


### GoogleCloudiotDeviceTimeouts <a name="GoogleCloudiotDeviceTimeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#create GoogleCloudiotDevice#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#delete GoogleCloudiotDevice#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#update GoogleCloudiotDevice#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#create GoogleCloudiotDevice#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#delete GoogleCloudiotDevice#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#update GoogleCloudiotDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudiotDeviceConfigAList <a name="GoogleCloudiotDeviceConfigAList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudiotDeviceConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudiotDeviceConfigAOutputReference <a name="GoogleCloudiotDeviceConfigAOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.binaryData">binary_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.cloudUpdateTime">cloud_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.deviceAckTime">device_ack_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA">GoogleCloudiotDeviceConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_data`<sup>Required</sup> <a name="binary_data" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.binaryData"></a>

```python
binary_data: str
```

- *Type:* str

---

##### `cloud_update_time`<sup>Required</sup> <a name="cloud_update_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.cloudUpdateTime"></a>

```python
cloud_update_time: str
```

- *Type:* str

---

##### `device_ack_time`<sup>Required</sup> <a name="device_ack_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.deviceAckTime"></a>

```python
device_ack_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudiotDeviceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA">GoogleCloudiotDeviceConfigA</a>

---


### GoogleCloudiotDeviceCredentialsList <a name="GoogleCloudiotDeviceCredentialsList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudiotDeviceCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCloudiotDeviceCredentials]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]]

---


### GoogleCloudiotDeviceCredentialsOutputReference <a name="GoogleCloudiotDeviceCredentialsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey">put_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resetExpirationTime">reset_expiration_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_key` <a name="put_public_key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey"></a>

```python
def put_public_key(
  format: str,
  key: str
) -> None
```

###### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey.parameter.format"></a>

- *Type:* str

The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#format GoogleCloudiotDevice#format}

---

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey.parameter.key"></a>

- *Type:* str

The key data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_cloudiot_device#key GoogleCloudiotDevice#key}

---

##### `reset_expiration_time` <a name="reset_expiration_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resetExpirationTime"></a>

```python
def reset_expiration_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKey">public_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference">GoogleCloudiotDeviceCredentialsPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTimeInput">expiration_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKeyInput">public_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKey"></a>

```python
public_key: GoogleCloudiotDeviceCredentialsPublicKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference">GoogleCloudiotDeviceCredentialsPublicKeyOutputReference</a>

---

##### `expiration_time_input`<sup>Optional</sup> <a name="expiration_time_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTimeInput"></a>

```python
expiration_time_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKeyInput"></a>

```python
public_key_input: GoogleCloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudiotDeviceCredentials]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials">GoogleCloudiotDeviceCredentials</a>]

---


### GoogleCloudiotDeviceCredentialsPublicKeyOutputReference <a name="GoogleCloudiotDeviceCredentialsPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---


### GoogleCloudiotDeviceGatewayConfigOutputReference <a name="GoogleCloudiotDeviceGatewayConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod">reset_gateway_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayType">reset_gateway_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gateway_auth_method` <a name="reset_gateway_auth_method" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod"></a>

```python
def reset_gateway_auth_method() -> None
```

##### `reset_gateway_type` <a name="reset_gateway_type" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayType"></a>

```python
def reset_gateway_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId">last_accessed_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime">last_accessed_gateway_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput">gateway_auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput">gateway_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod">gateway_auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayType">gateway_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_accessed_gateway_id`<sup>Required</sup> <a name="last_accessed_gateway_id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId"></a>

```python
last_accessed_gateway_id: str
```

- *Type:* str

---

##### `last_accessed_gateway_time`<sup>Required</sup> <a name="last_accessed_gateway_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime"></a>

```python
last_accessed_gateway_time: str
```

- *Type:* str

---

##### `gateway_auth_method_input`<sup>Optional</sup> <a name="gateway_auth_method_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput"></a>

```python
gateway_auth_method_input: str
```

- *Type:* str

---

##### `gateway_type_input`<sup>Optional</sup> <a name="gateway_type_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput"></a>

```python
gateway_type_input: str
```

- *Type:* str

---

##### `gateway_auth_method`<sup>Required</sup> <a name="gateway_auth_method" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod"></a>

```python
gateway_auth_method: str
```

- *Type:* str

---

##### `gateway_type`<sup>Required</sup> <a name="gateway_type" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayType"></a>

```python
gateway_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---


### GoogleCloudiotDeviceLastErrorStatusList <a name="GoogleCloudiotDeviceLastErrorStatusList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudiotDeviceLastErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudiotDeviceLastErrorStatusOutputReference <a name="GoogleCloudiotDeviceLastErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus">GoogleCloudiotDeviceLastErrorStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudiotDeviceLastErrorStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus">GoogleCloudiotDeviceLastErrorStatus</a>

---


### GoogleCloudiotDeviceStateList <a name="GoogleCloudiotDeviceStateList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudiotDeviceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudiotDeviceStateOutputReference <a name="GoogleCloudiotDeviceStateOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.binaryData">binary_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState">GoogleCloudiotDeviceState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_data`<sup>Required</sup> <a name="binary_data" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.binaryData"></a>

```python
binary_data: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudiotDeviceState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState">GoogleCloudiotDeviceState</a>

---


### GoogleCloudiotDeviceTimeoutsOutputReference <a name="GoogleCloudiotDeviceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudiot_device

googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudiotDeviceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>]

---



