# `google_api_gateway_api_config`

Refer to the Terraform Registory for docs: [`google_api_gateway_api_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config).

# `googleApiGatewayApiConfig` Submodule <a name="`googleApiGatewayApiConfig` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayApiConfigA <a name="GoogleApiGatewayApiConfigA" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config google_api_gateway_api_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigA(scope Construct, id *string, config GoogleApiGatewayApiConfigAConfig) GoogleApiGatewayApiConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig">GoogleApiGatewayApiConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig">GoogleApiGatewayApiConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig">PutGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices">PutGrpcServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs">PutManagedServiceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments">PutOpenapiDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId">ResetApiConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix">ResetApiConfigIdPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig">ResetGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices">ResetGrpcServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs">ResetManagedServiceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments">ResetOpenapiDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGatewayConfig` <a name="PutGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig"></a>

```go
func PutGatewayConfig(value GoogleApiGatewayApiConfigGatewayConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---

##### `PutGrpcServices` <a name="PutGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices"></a>

```go
func PutGrpcServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedServiceConfigs` <a name="PutManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs"></a>

```go
func PutManagedServiceConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOpenapiDocuments` <a name="PutOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments"></a>

```go
func PutOpenapiDocuments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApiGatewayApiConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

---

##### `ResetApiConfigId` <a name="ResetApiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId"></a>

```go
func ResetApiConfigId()
```

##### `ResetApiConfigIdPrefix` <a name="ResetApiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix"></a>

```go
func ResetApiConfigIdPrefix()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGatewayConfig` <a name="ResetGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig"></a>

```go
func ResetGatewayConfig()
```

##### `ResetGrpcServices` <a name="ResetGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices"></a>

```go
func ResetGrpcServices()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetManagedServiceConfigs` <a name="ResetManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs"></a>

```go
func ResetManagedServiceConfigs()
```

##### `ResetOpenapiDocuments` <a name="ResetOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments"></a>

```go
func ResetOpenapiDocuments()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.GoogleApiGatewayApiConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.GoogleApiGatewayApiConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.GoogleApiGatewayApiConfigA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices">GrpcServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs">ManagedServiceConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments">OpenapiDocuments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId">ServiceConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput">ApiConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput">ApiConfigIdPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput">GatewayConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput">GrpcServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput">ManagedServiceConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput">OpenapiDocumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId">ApiConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix">ApiConfigIdPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayConfig`<sup>Required</sup> <a name="GatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig"></a>

```go
func GatewayConfig() GoogleApiGatewayApiConfigGatewayConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a>

---

##### `GrpcServices`<sup>Required</sup> <a name="GrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices"></a>

```go
func GrpcServices() GoogleApiGatewayApiConfigGrpcServicesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a>

---

##### `ManagedServiceConfigs`<sup>Required</sup> <a name="ManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs"></a>

```go
func ManagedServiceConfigs() GoogleApiGatewayApiConfigManagedServiceConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenapiDocuments`<sup>Required</sup> <a name="OpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments"></a>

```go
func OpenapiDocuments() GoogleApiGatewayApiConfigOpenapiDocumentsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a>

---

##### `ServiceConfigId`<sup>Required</sup> <a name="ServiceConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId"></a>

```go
func ServiceConfigId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts"></a>

```go
func Timeouts() GoogleApiGatewayApiConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a>

---

##### `ApiConfigIdInput`<sup>Optional</sup> <a name="ApiConfigIdInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput"></a>

```go
func ApiConfigIdInput() *string
```

- *Type:* *string

---

##### `ApiConfigIdPrefixInput`<sup>Optional</sup> <a name="ApiConfigIdPrefixInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput"></a>

```go
func ApiConfigIdPrefixInput() *string
```

- *Type:* *string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GatewayConfigInput`<sup>Optional</sup> <a name="GatewayConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput"></a>

```go
func GatewayConfigInput() GoogleApiGatewayApiConfigGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---

##### `GrpcServicesInput`<sup>Optional</sup> <a name="GrpcServicesInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput"></a>

```go
func GrpcServicesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ManagedServiceConfigsInput`<sup>Optional</sup> <a name="ManagedServiceConfigsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput"></a>

```go
func ManagedServiceConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `OpenapiDocumentsInput`<sup>Optional</sup> <a name="OpenapiDocumentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput"></a>

```go
func OpenapiDocumentsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `ApiConfigId`<sup>Required</sup> <a name="ApiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId"></a>

```go
func ApiConfigId() *string
```

- *Type:* *string

---

##### `ApiConfigIdPrefix`<sup>Required</sup> <a name="ApiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix"></a>

```go
func ApiConfigIdPrefix() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayApiConfigAConfig <a name="GoogleApiGatewayApiConfigAConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Api: *string,
	ApiConfigId: *string,
	ApiConfigIdPrefix: *string,
	DisplayName: *string,
	GatewayConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig,
	GrpcServices: interface{},
	Id: *string,
	Labels: *map[string]*string,
	ManagedServiceConfigs: interface{},
	OpenapiDocuments: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api">Api</a></code> | <code>*string</code> | The API to attach the config to. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId">ApiConfigId</a></code> | <code>*string</code> | Identifier to assign to the API Config. Must be unique within scope of the parent resource(api). |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix">ApiConfigIdPrefix</a></code> | <code>*string</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A user-visible name for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices">GrpcServices</a></code> | <code>interface{}</code> | grpc_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs">ManagedServiceConfigs</a></code> | <code>interface{}</code> | managed_service_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments">OpenapiDocuments</a></code> | <code>interface{}</code> | openapi_documents block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api"></a>

```go
Api *string
```

- *Type:* *string

The API to attach the config to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}

---

##### `ApiConfigId`<sup>Optional</sup> <a name="ApiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId"></a>

```go
ApiConfigId *string
```

- *Type:* *string

Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}

---

##### `ApiConfigIdPrefix`<sup>Optional</sup> <a name="ApiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix"></a>

```go
ApiConfigIdPrefix *string
```

- *Type:* *string

Creates a unique name beginning with the specified prefix.

If this and api_config_id are unspecified, a random value is chosen for the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}

---

##### `GatewayConfig`<sup>Optional</sup> <a name="GatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig"></a>

```go
GatewayConfig GoogleApiGatewayApiConfigGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}

---

##### `GrpcServices`<sup>Optional</sup> <a name="GrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices"></a>

```go
GrpcServices interface{}
```

- *Type:* interface{}

grpc_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user-provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}

---

##### `ManagedServiceConfigs`<sup>Optional</sup> <a name="ManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs"></a>

```go
ManagedServiceConfigs interface{}
```

- *Type:* interface{}

managed_service_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}

---

##### `OpenapiDocuments`<sup>Optional</sup> <a name="OpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments"></a>

```go
OpenapiDocuments interface{}
```

- *Type:* interface{}

openapi_documents block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts"></a>

```go
Timeouts GoogleApiGatewayApiConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}

---

### GoogleApiGatewayApiConfigGatewayConfig <a name="GoogleApiGatewayApiConfigGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigGatewayConfig {
	BackendConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig">BackendConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | backend_config block. |

---

##### `BackendConfig`<sup>Required</sup> <a name="BackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig"></a>

```go
BackendConfig GoogleApiGatewayApiConfigGatewayConfigBackendConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#backend_config GoogleApiGatewayApiConfigA#backend_config}

---

### GoogleApiGatewayApiConfigGatewayConfigBackendConfig <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig {
	GoogleServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend). |

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount"></a>

```go
GoogleServiceAccount *string
```

- *Type:* *string

Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#google_service_account GoogleApiGatewayApiConfigA#google_service_account}

---

### GoogleApiGatewayApiConfigGrpcServices <a name="GoogleApiGatewayApiConfigGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigGrpcServices {
	FileDescriptorSet: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet,
	Source: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet">FileDescriptorSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | file_descriptor_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source">Source</a></code> | <code>interface{}</code> | source block. |

---

##### `FileDescriptorSet`<sup>Required</sup> <a name="FileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet"></a>

```go
FileDescriptorSet GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

file_descriptor_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#file_descriptor_set GoogleApiGatewayApiConfigA#file_descriptor_set}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#source GoogleApiGatewayApiConfigA#source}

---

### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet {
	Contents: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents">Contents</a></code> | <code>*string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path">Path</a></code> | <code>*string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents"></a>

```go
Contents *string
```

- *Type:* *string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path"></a>

```go
Path *string
```

- *Type:* *string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigGrpcServicesSource <a name="GoogleApiGatewayApiConfigGrpcServicesSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigGrpcServicesSource {
	Contents: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents">Contents</a></code> | <code>*string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path">Path</a></code> | <code>*string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents"></a>

```go
Contents *string
```

- *Type:* *string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigManagedServiceConfigs <a name="GoogleApiGatewayApiConfigManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigManagedServiceConfigs {
	Contents: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents">Contents</a></code> | <code>*string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path">Path</a></code> | <code>*string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents"></a>

```go
Contents *string
```

- *Type:* *string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path"></a>

```go
Path *string
```

- *Type:* *string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigOpenapiDocuments <a name="GoogleApiGatewayApiConfigOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigOpenapiDocuments {
	Document: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document">Document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | document block. |

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document"></a>

```go
Document GoogleApiGatewayApiConfigOpenapiDocumentsDocument
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#document GoogleApiGatewayApiConfigA#document}

---

### GoogleApiGatewayApiConfigOpenapiDocumentsDocument <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocument" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument {
	Contents: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents">Contents</a></code> | <code>*string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path">Path</a></code> | <code>*string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents"></a>

```go
Contents *string
```

- *Type:* *string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path"></a>

```go
Path *string
```

- *Type:* *string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigTimeouts <a name="GoogleApiGatewayApiConfigTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

&googleapigatewayapiconfig.GoogleApiGatewayApiConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput"></a>

```go
func GoogleServiceAccountInput() *string
```

- *Type:* *string

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount"></a>

```go
func GoogleServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApiGatewayApiConfigGatewayConfigBackendConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---


### GoogleApiGatewayApiConfigGatewayConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigGatewayConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApiGatewayApiConfigGatewayConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig">PutBackendConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendConfig` <a name="PutBackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig"></a>

```go
func PutBackendConfig(value GoogleApiGatewayApiConfigGatewayConfigBackendConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig">BackendConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput">BackendConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendConfig`<sup>Required</sup> <a name="BackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig"></a>

```go
func BackendConfig() GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a>

---

##### `BackendConfigInput`<sup>Optional</sup> <a name="BackendConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput"></a>

```go
func BackendConfigInput() GoogleApiGatewayApiConfigGatewayConfigBackendConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApiGatewayApiConfigGatewayConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---


### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents">Contents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents"></a>

```go
func Contents() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---


### GoogleApiGatewayApiConfigGrpcServicesList <a name="GoogleApiGatewayApiConfigGrpcServicesList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigGrpcServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApiGatewayApiConfigGrpcServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get"></a>

```go
func Get(index *f64) GoogleApiGatewayApiConfigGrpcServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigGrpcServicesOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigGrpcServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApiGatewayApiConfigGrpcServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet">PutFileDescriptorSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileDescriptorSet` <a name="PutFileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet"></a>

```go
func PutFileDescriptorSet(value GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet">FileDescriptorSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput">FileDescriptorSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileDescriptorSet`<sup>Required</sup> <a name="FileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet"></a>

```go
func FileDescriptorSet() GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source"></a>

```go
func Source() GoogleApiGatewayApiConfigGrpcServicesSourceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a>

---

##### `FileDescriptorSetInput`<sup>Optional</sup> <a name="FileDescriptorSetInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput"></a>

```go
func FileDescriptorSetInput() GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigGrpcServicesSourceList <a name="GoogleApiGatewayApiConfigGrpcServicesSourceList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigGrpcServicesSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApiGatewayApiConfigGrpcServicesSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get"></a>

```go
func Get(index *f64) GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigGrpcServicesSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents">Contents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents"></a>

```go
func Contents() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigManagedServiceConfigsList <a name="GoogleApiGatewayApiConfigManagedServiceConfigsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigManagedServiceConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApiGatewayApiConfigManagedServiceConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get"></a>

```go
func Get(index *f64) GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference <a name="GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigManagedServiceConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents">Contents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents"></a>

```go
func Contents() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput">ContentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents">Contents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput"></a>

```go
func ContentsInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents"></a>

```go
func Contents() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApiGatewayApiConfigOpenapiDocumentsDocument
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---


### GoogleApiGatewayApiConfigOpenapiDocumentsList <a name="GoogleApiGatewayApiConfigOpenapiDocumentsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigOpenapiDocumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApiGatewayApiConfigOpenapiDocumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get"></a>

```go
func Get(index *f64) GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigOpenapiDocumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument">PutDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocument` <a name="PutDocument" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument"></a>

```go
func PutDocument(value GoogleApiGatewayApiConfigOpenapiDocumentsDocument)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document">Document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput">DocumentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document"></a>

```go
func Document() GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a>

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput"></a>

```go
func DocumentInput() GoogleApiGatewayApiConfigOpenapiDocumentsDocument
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApiGatewayApiConfigTimeoutsOutputReference <a name="GoogleApiGatewayApiConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googleapigatewayapiconfig"

googleapigatewayapiconfig.NewGoogleApiGatewayApiConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApiGatewayApiConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



