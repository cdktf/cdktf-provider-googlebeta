# `google_cloudiot_device`

Refer to the Terraform Registory for docs: [`google_cloudiot_device`](https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device).

# `googleCloudiotDevice` Submodule <a name="`googleCloudiotDevice` Submodule" id="@cdktf/provider-google-beta.googleCloudiotDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudiotDevice <a name="GoogleCloudiotDevice" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device google_cloudiot_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDevice(scope Construct, id *string, config GoogleCloudiotDeviceConfig) GoogleCloudiotDevice
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig">GoogleCloudiotDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig">GoogleCloudiotDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig">PutGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetBlocked">ResetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetGatewayConfig">ResetGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials"></a>

```go
func PutCredentials(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putCredentials.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGatewayConfig` <a name="PutGatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig"></a>

```go
func PutGatewayConfig(value GoogleCloudiotDeviceGatewayConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putGatewayConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudiotDeviceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

---

##### `ResetBlocked` <a name="ResetBlocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetBlocked"></a>

```go
func ResetBlocked()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetGatewayConfig` <a name="ResetGatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetGatewayConfig"></a>

```go
func ResetGatewayConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetId"></a>

```go
func ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.GoogleCloudiotDevice_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.GoogleCloudiotDevice_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.GoogleCloudiotDevice_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList">GoogleCloudiotDeviceConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList">GoogleCloudiotDeviceCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference">GoogleCloudiotDeviceGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigAckTime">LastConfigAckTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigSendTime">LastConfigSendTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorStatus">LastErrorStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList">GoogleCloudiotDeviceLastErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorTime">LastErrorTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastEventTime">LastEventTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastHeartbeatTime">LastHeartbeatTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastStateTime">LastStateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.numId">NumId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.state">State</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList">GoogleCloudiotDeviceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference">GoogleCloudiotDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blockedInput">BlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentialsInput">CredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfigInput">GatewayConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registryInput">RegistryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blocked">Blocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registry">Registry</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.config"></a>

```go
func Config() GoogleCloudiotDeviceConfigAList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList">GoogleCloudiotDeviceConfigAList</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentials"></a>

```go
func Credentials() GoogleCloudiotDeviceCredentialsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList">GoogleCloudiotDeviceCredentialsList</a>

---

##### `GatewayConfig`<sup>Required</sup> <a name="GatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfig"></a>

```go
func GatewayConfig() GoogleCloudiotDeviceGatewayConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference">GoogleCloudiotDeviceGatewayConfigOutputReference</a>

---

##### `LastConfigAckTime`<sup>Required</sup> <a name="LastConfigAckTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigAckTime"></a>

```go
func LastConfigAckTime() *string
```

- *Type:* *string

---

##### `LastConfigSendTime`<sup>Required</sup> <a name="LastConfigSendTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastConfigSendTime"></a>

```go
func LastConfigSendTime() *string
```

- *Type:* *string

---

##### `LastErrorStatus`<sup>Required</sup> <a name="LastErrorStatus" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorStatus"></a>

```go
func LastErrorStatus() GoogleCloudiotDeviceLastErrorStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList">GoogleCloudiotDeviceLastErrorStatusList</a>

---

##### `LastErrorTime`<sup>Required</sup> <a name="LastErrorTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastErrorTime"></a>

```go
func LastErrorTime() *string
```

- *Type:* *string

---

##### `LastEventTime`<sup>Required</sup> <a name="LastEventTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastEventTime"></a>

```go
func LastEventTime() *string
```

- *Type:* *string

---

##### `LastHeartbeatTime`<sup>Required</sup> <a name="LastHeartbeatTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastHeartbeatTime"></a>

```go
func LastHeartbeatTime() *string
```

- *Type:* *string

---

##### `LastStateTime`<sup>Required</sup> <a name="LastStateTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.lastStateTime"></a>

```go
func LastStateTime() *string
```

- *Type:* *string

---

##### `NumId`<sup>Required</sup> <a name="NumId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.numId"></a>

```go
func NumId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.state"></a>

```go
func State() GoogleCloudiotDeviceStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList">GoogleCloudiotDeviceStateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeouts"></a>

```go
func Timeouts() GoogleCloudiotDeviceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference">GoogleCloudiotDeviceTimeoutsOutputReference</a>

---

##### `BlockedInput`<sup>Optional</sup> <a name="BlockedInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blockedInput"></a>

```go
func BlockedInput() interface{}
```

- *Type:* interface{}

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.credentialsInput"></a>

```go
func CredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayConfigInput`<sup>Optional</sup> <a name="GatewayConfigInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.gatewayConfigInput"></a>

```go
func GatewayConfigInput() GoogleCloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registryInput"></a>

```go
func RegistryInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Blocked`<sup>Required</sup> <a name="Blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.blocked"></a>

```go
func Blocked() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.registry"></a>

```go
func Registry() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDevice.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudiotDeviceConfig <a name="GoogleCloudiotDeviceConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Registry: *string,
	Blocked: interface{},
	Credentials: interface{},
	GatewayConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig,
	Id: *string,
	LogLevel: *string,
	Metadata: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.name">Name</a></code> | <code>*string</code> | A unique name for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.registry">Registry</a></code> | <code>*string</code> | The name of the device registry where this device should be created. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.blocked">Blocked</a></code> | <code>interface{}</code> | If a device is blocked, connections or requests from this device will fail. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.credentials">Credentials</a></code> | <code>interface{}</code> | credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | The metadata key-value pairs assigned to the device. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#name GoogleCloudiotDevice#name}

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.registry"></a>

```go
Registry *string
```

- *Type:* *string

The name of the device registry where this device should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#registry GoogleCloudiotDevice#registry}

---

##### `Blocked`<sup>Optional</sup> <a name="Blocked" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.blocked"></a>

```go
Blocked interface{}
```

- *Type:* interface{}

If a device is blocked, connections or requests from this device will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#blocked GoogleCloudiotDevice#blocked}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.credentials"></a>

```go
Credentials interface{}
```

- *Type:* interface{}

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#credentials GoogleCloudiotDevice#credentials}

---

##### `GatewayConfig`<sup>Optional</sup> <a name="GatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.gatewayConfig"></a>

```go
GatewayConfig GoogleCloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#gateway_config GoogleCloudiotDevice#gateway_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#id GoogleCloudiotDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#log_level GoogleCloudiotDevice#log_level}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

The metadata key-value pairs assigned to the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#metadata GoogleCloudiotDevice#metadata}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudiotDeviceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts">GoogleCloudiotDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#timeouts GoogleCloudiotDevice#timeouts}

---

### GoogleCloudiotDeviceConfigA <a name="GoogleCloudiotDeviceConfigA" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceConfigA {

}
```


### GoogleCloudiotDeviceCredentials <a name="GoogleCloudiotDeviceCredentials" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceCredentials {
	PublicKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey,
	ExpirationTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | public_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | The time at which this credential becomes invalid. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.publicKey"></a>

```go
PublicKey GoogleCloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#public_key GoogleCloudiotDevice#public_key}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentials.property.expirationTime"></a>

```go
ExpirationTime *string
```

- *Type:* *string

The time at which this credential becomes invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#expiration_time GoogleCloudiotDevice#expiration_time}

---

### GoogleCloudiotDeviceCredentialsPublicKey <a name="GoogleCloudiotDeviceCredentialsPublicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceCredentialsPublicKey {
	Format: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.format">Format</a></code> | <code>*string</code> | The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.key">Key</a></code> | <code>*string</code> | The key data. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#format GoogleCloudiotDevice#format}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#key GoogleCloudiotDevice#key}

---

### GoogleCloudiotDeviceGatewayConfig <a name="GoogleCloudiotDeviceGatewayConfig" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceGatewayConfig {
	GatewayAuthMethod: *string,
	GatewayType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayAuthMethod">GatewayAuthMethod</a></code> | <code>*string</code> | Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayType">GatewayType</a></code> | <code>*string</code> | Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"]. |

---

##### `GatewayAuthMethod`<sup>Optional</sup> <a name="GatewayAuthMethod" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayAuthMethod"></a>

```go
GatewayAuthMethod *string
```

- *Type:* *string

Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#gateway_auth_method GoogleCloudiotDevice#gateway_auth_method}

---

##### `GatewayType`<sup>Optional</sup> <a name="GatewayType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig.property.gatewayType"></a>

```go
GatewayType *string
```

- *Type:* *string

Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#gateway_type GoogleCloudiotDevice#gateway_type}

---

### GoogleCloudiotDeviceLastErrorStatus <a name="GoogleCloudiotDeviceLastErrorStatus" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceLastErrorStatus {

}
```


### GoogleCloudiotDeviceState <a name="GoogleCloudiotDeviceState" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceState {

}
```


### GoogleCloudiotDeviceTimeouts <a name="GoogleCloudiotDeviceTimeouts" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

&googlecloudiotdevice.GoogleCloudiotDeviceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#create GoogleCloudiotDevice#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#delete GoogleCloudiotDevice#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#update GoogleCloudiotDevice#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#create GoogleCloudiotDevice#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#delete GoogleCloudiotDevice#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_device#update GoogleCloudiotDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudiotDeviceConfigAList <a name="GoogleCloudiotDeviceConfigAList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudiotDeviceConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get"></a>

```go
func Get(index *f64) GoogleCloudiotDeviceConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudiotDeviceConfigAOutputReference <a name="GoogleCloudiotDeviceConfigAOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudiotDeviceConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.binaryData">BinaryData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.cloudUpdateTime">CloudUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.deviceAckTime">DeviceAckTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA">GoogleCloudiotDeviceConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryData`<sup>Required</sup> <a name="BinaryData" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.binaryData"></a>

```go
func BinaryData() *string
```

- *Type:* *string

---

##### `CloudUpdateTime`<sup>Required</sup> <a name="CloudUpdateTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.cloudUpdateTime"></a>

```go
func CloudUpdateTime() *string
```

- *Type:* *string

---

##### `DeviceAckTime`<sup>Required</sup> <a name="DeviceAckTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.deviceAckTime"></a>

```go
func DeviceAckTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudiotDeviceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceConfigA">GoogleCloudiotDeviceConfigA</a>

---


### GoogleCloudiotDeviceCredentialsList <a name="GoogleCloudiotDeviceCredentialsList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudiotDeviceCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get"></a>

```go
func Get(index *f64) GoogleCloudiotDeviceCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudiotDeviceCredentialsOutputReference <a name="GoogleCloudiotDeviceCredentialsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudiotDeviceCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey">PutPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicKey` <a name="PutPublicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey"></a>

```go
func PutPublicKey(value GoogleCloudiotDeviceCredentialsPublicKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.putPublicKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.resetExpirationTime"></a>

```go
func ResetExpirationTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference">GoogleCloudiotDeviceCredentialsPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKey"></a>

```go
func PublicKey() GoogleCloudiotDeviceCredentialsPublicKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference">GoogleCloudiotDeviceCredentialsPublicKeyOutputReference</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() GoogleCloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudiotDeviceCredentialsPublicKeyOutputReference <a name="GoogleCloudiotDeviceCredentialsPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceCredentialsPublicKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudiotDeviceCredentialsPublicKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudiotDeviceCredentialsPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceCredentialsPublicKey">GoogleCloudiotDeviceCredentialsPublicKey</a>

---


### GoogleCloudiotDeviceGatewayConfigOutputReference <a name="GoogleCloudiotDeviceGatewayConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceGatewayConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudiotDeviceGatewayConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod">ResetGatewayAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayType">ResetGatewayType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGatewayAuthMethod` <a name="ResetGatewayAuthMethod" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayAuthMethod"></a>

```go
func ResetGatewayAuthMethod()
```

##### `ResetGatewayType` <a name="ResetGatewayType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.resetGatewayType"></a>

```go
func ResetGatewayType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId">LastAccessedGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime">LastAccessedGatewayTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput">GatewayAuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput">GatewayTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod">GatewayAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayType">GatewayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastAccessedGatewayId`<sup>Required</sup> <a name="LastAccessedGatewayId" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayId"></a>

```go
func LastAccessedGatewayId() *string
```

- *Type:* *string

---

##### `LastAccessedGatewayTime`<sup>Required</sup> <a name="LastAccessedGatewayTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.lastAccessedGatewayTime"></a>

```go
func LastAccessedGatewayTime() *string
```

- *Type:* *string

---

##### `GatewayAuthMethodInput`<sup>Optional</sup> <a name="GatewayAuthMethodInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethodInput"></a>

```go
func GatewayAuthMethodInput() *string
```

- *Type:* *string

---

##### `GatewayTypeInput`<sup>Optional</sup> <a name="GatewayTypeInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayTypeInput"></a>

```go
func GatewayTypeInput() *string
```

- *Type:* *string

---

##### `GatewayAuthMethod`<sup>Required</sup> <a name="GatewayAuthMethod" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayAuthMethod"></a>

```go
func GatewayAuthMethod() *string
```

- *Type:* *string

---

##### `GatewayType`<sup>Required</sup> <a name="GatewayType" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.gatewayType"></a>

```go
func GatewayType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudiotDeviceGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceGatewayConfig">GoogleCloudiotDeviceGatewayConfig</a>

---


### GoogleCloudiotDeviceLastErrorStatusList <a name="GoogleCloudiotDeviceLastErrorStatusList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceLastErrorStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudiotDeviceLastErrorStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get"></a>

```go
func Get(index *f64) GoogleCloudiotDeviceLastErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudiotDeviceLastErrorStatusOutputReference <a name="GoogleCloudiotDeviceLastErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceLastErrorStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudiotDeviceLastErrorStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus">GoogleCloudiotDeviceLastErrorStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudiotDeviceLastErrorStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceLastErrorStatus">GoogleCloudiotDeviceLastErrorStatus</a>

---


### GoogleCloudiotDeviceStateList <a name="GoogleCloudiotDeviceStateList" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudiotDeviceStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get"></a>

```go
func Get(index *f64) GoogleCloudiotDeviceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudiotDeviceStateOutputReference <a name="GoogleCloudiotDeviceStateOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudiotDeviceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.binaryData">BinaryData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState">GoogleCloudiotDeviceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryData`<sup>Required</sup> <a name="BinaryData" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.binaryData"></a>

```go
func BinaryData() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudiotDeviceState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceState">GoogleCloudiotDeviceState</a>

---


### GoogleCloudiotDeviceTimeoutsOutputReference <a name="GoogleCloudiotDeviceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudiotdevice"

googlecloudiotdevice.NewGoogleCloudiotDeviceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudiotDeviceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotDevice.GoogleCloudiotDeviceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



