# `google_game_services_game_server_config`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config).

# `googleGameServicesGameServerConfig` Submodule <a name="`googleGameServicesGameServerConfig` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerConfig <a name="GoogleGameServicesGameServerConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config google_game_services_game_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfig(scope Construct, id *string, config GoogleGameServicesGameServerConfigConfig) GoogleGameServicesGameServerConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig">GoogleGameServicesGameServerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig">GoogleGameServicesGameServerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs">PutFleetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs">PutScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetScalingConfigs">ResetScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFleetConfigs` <a name="PutFleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs"></a>

```go
func PutFleetConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScalingConfigs` <a name="PutScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs"></a>

```go
func PutScalingConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGameServicesGameServerConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetScalingConfigs` <a name="ResetScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetScalingConfigs"></a>

```go
func ResetScalingConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigs">FleetConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList">GoogleGameServicesGameServerConfigFleetConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigs">ScalingConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList">GoogleGameServicesGameServerConfigScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference">GoogleGameServicesGameServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigsInput">FleetConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigsInput">ScalingConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FleetConfigs`<sup>Required</sup> <a name="FleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigs"></a>

```go
func FleetConfigs() GoogleGameServicesGameServerConfigFleetConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList">GoogleGameServicesGameServerConfigFleetConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScalingConfigs`<sup>Required</sup> <a name="ScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigs"></a>

```go
func ScalingConfigs() GoogleGameServicesGameServerConfigScalingConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList">GoogleGameServicesGameServerConfigScalingConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeouts"></a>

```go
func Timeouts() GoogleGameServicesGameServerConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference">GoogleGameServicesGameServerConfigTimeoutsOutputReference</a>

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FleetConfigsInput`<sup>Optional</sup> <a name="FleetConfigsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigsInput"></a>

```go
func FleetConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScalingConfigsInput`<sup>Optional</sup> <a name="ScalingConfigsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigsInput"></a>

```go
func ScalingConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerConfigConfig <a name="GoogleGameServicesGameServerConfigConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

&googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigId: *string,
	DeploymentId: *string,
	FleetConfigs: interface{},
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	ScalingConfigs: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.configId">ConfigId</a></code> | <code>*string</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.fleetConfigs">FleetConfigs</a></code> | <code>interface{}</code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.description">Description</a></code> | <code>*string</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.location">Location</a></code> | <code>*string</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.scalingConfigs">ScalingConfigs</a></code> | <code>interface{}</code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#config_id GoogleGameServicesGameServerConfig#config_id}

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#deployment_id GoogleGameServicesGameServerConfig#deployment_id}

---

##### `FleetConfigs`<sup>Required</sup> <a name="FleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.fleetConfigs"></a>

```go
FleetConfigs interface{}
```

- *Type:* interface{}

fleet_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#fleet_configs GoogleGameServicesGameServerConfig#fleet_configs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the game server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#description GoogleGameServicesGameServerConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#location GoogleGameServicesGameServerConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}.

---

##### `ScalingConfigs`<sup>Optional</sup> <a name="ScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.scalingConfigs"></a>

```go
ScalingConfigs interface{}
```

- *Type:* interface{}

scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#scaling_configs GoogleGameServicesGameServerConfig#scaling_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleGameServicesGameServerConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#timeouts GoogleGameServicesGameServerConfig#timeouts}

---

### GoogleGameServicesGameServerConfigFleetConfigs <a name="GoogleGameServicesGameServerConfigFleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

&googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfigFleetConfigs {
	FleetSpec: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.fleetSpec">FleetSpec</a></code> | <code>*string</code> | The fleet spec, which is sent to Agones to configure fleet. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.name">Name</a></code> | <code>*string</code> | The name of the FleetConfig. |

---

##### `FleetSpec`<sup>Required</sup> <a name="FleetSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.fleetSpec"></a>

```go
FleetSpec *string
```

- *Type:* *string

The fleet spec, which is sent to Agones to configure fleet.

The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#fleet_spec GoogleGameServicesGameServerConfig#fleet_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the FleetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}

---

### GoogleGameServicesGameServerConfigScalingConfigs <a name="GoogleGameServicesGameServerConfigScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

&googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfigScalingConfigs {
	FleetAutoscalerSpec: *string,
	Name: *string,
	Schedules: interface{},
	Selectors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec">FleetAutoscalerSpec</a></code> | <code>*string</code> | Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.name">Name</a></code> | <code>*string</code> | The name of the ScalingConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.schedules">Schedules</a></code> | <code>interface{}</code> | schedules block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |

---

##### `FleetAutoscalerSpec`<sup>Required</sup> <a name="FleetAutoscalerSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec"></a>

```go
FleetAutoscalerSpec *string
```

- *Type:* *string

Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#fleet_autoscaler_spec GoogleGameServicesGameServerConfig#fleet_autoscaler_spec}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ScalingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}

---

##### `Schedules`<sup>Optional</sup> <a name="Schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.schedules"></a>

```go
Schedules interface{}
```

- *Type:* interface{}

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#schedules GoogleGameServicesGameServerConfig#schedules}

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#selectors GoogleGameServicesGameServerConfig#selectors}

---

### GoogleGameServicesGameServerConfigScalingConfigsSchedules <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

&googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules {
	CronJobDuration: *string,
	CronSpec: *string,
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration">CronJobDuration</a></code> | <code>*string</code> | The duration for the cron job event. The duration of the event is effective after the cron job's start time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec">CronSpec</a></code> | <code>*string</code> | The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.endTime">EndTime</a></code> | <code>*string</code> | The end time of the event. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.startTime">StartTime</a></code> | <code>*string</code> | The start time of the event. |

---

##### `CronJobDuration`<sup>Optional</sup> <a name="CronJobDuration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration"></a>

```go
CronJobDuration *string
```

- *Type:* *string

The duration for the cron job event. The duration of the event is effective after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#cron_job_duration GoogleGameServicesGameServerConfig#cron_job_duration}

---

##### `CronSpec`<sup>Optional</sup> <a name="CronSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec"></a>

```go
CronSpec *string
```

- *Type:* *string

The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#cron_spec GoogleGameServicesGameServerConfig#cron_spec}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#end_time GoogleGameServicesGameServerConfig#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#start_time GoogleGameServicesGameServerConfig#start_time}

---

### GoogleGameServicesGameServerConfigScalingConfigsSelectors <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

&googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors {
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels to group by. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}

---

### GoogleGameServicesGameServerConfigTimeouts <a name="GoogleGameServicesGameServerConfigTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

&googlegameservicesgameserverconfig.GoogleGameServicesGameServerConfigTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerConfigFleetConfigsList <a name="GoogleGameServicesGameServerConfigFleetConfigsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigFleetConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGameServicesGameServerConfigFleetConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get"></a>

```go
func Get(index *f64) GoogleGameServicesGameServerConfigFleetConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigFleetConfigsOutputReference <a name="GoogleGameServicesGameServerConfigFleetConfigsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigFleetConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGameServicesGameServerConfigFleetConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput">FleetSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec">FleetSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FleetSpecInput`<sup>Optional</sup> <a name="FleetSpecInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput"></a>

```go
func FleetSpecInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `FleetSpec`<sup>Required</sup> <a name="FleetSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec"></a>

```go
func FleetSpec() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigScalingConfigsList <a name="GoogleGameServicesGameServerConfigScalingConfigsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigScalingConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGameServicesGameServerConfigScalingConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get"></a>

```go
func Get(index *f64) GoogleGameServicesGameServerConfigScalingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigScalingConfigsOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigScalingConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGameServicesGameServerConfigScalingConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules">PutSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules">ResetSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedules` <a name="PutSchedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules"></a>

```go
func PutSchedules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSchedules` <a name="ResetSchedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules"></a>

```go
func ResetSchedules()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors"></a>

```go
func ResetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedules">Schedules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList">GoogleGameServicesGameServerConfigScalingConfigsSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList">GoogleGameServicesGameServerConfigScalingConfigsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput">FleetAutoscalerSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput">SchedulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec">FleetAutoscalerSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedules"></a>

```go
func Schedules() GoogleGameServicesGameServerConfigScalingConfigsSchedulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList">GoogleGameServicesGameServerConfigScalingConfigsSchedulesList</a>

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectors"></a>

```go
func Selectors() GoogleGameServicesGameServerConfigScalingConfigsSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList">GoogleGameServicesGameServerConfigScalingConfigsSelectorsList</a>

---

##### `FleetAutoscalerSpecInput`<sup>Optional</sup> <a name="FleetAutoscalerSpecInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput"></a>

```go
func FleetAutoscalerSpecInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchedulesInput`<sup>Optional</sup> <a name="SchedulesInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput"></a>

```go
func SchedulesInput() interface{}
```

- *Type:* interface{}

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `FleetAutoscalerSpec`<sup>Required</sup> <a name="FleetAutoscalerSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec"></a>

```go
func FleetAutoscalerSpec() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigScalingConfigsSchedulesList <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedulesList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigScalingConfigsSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGameServicesGameServerConfigScalingConfigsSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get"></a>

```go
func Get(index *f64) GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration">ResetCronJobDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec">ResetCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronJobDuration` <a name="ResetCronJobDuration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration"></a>

```go
func ResetCronJobDuration()
```

##### `ResetCronSpec` <a name="ResetCronSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec"></a>

```go
func ResetCronSpec()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput">CronJobDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput">CronSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration">CronJobDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec">CronSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronJobDurationInput`<sup>Optional</sup> <a name="CronJobDurationInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput"></a>

```go
func CronJobDurationInput() *string
```

- *Type:* *string

---

##### `CronSpecInput`<sup>Optional</sup> <a name="CronSpecInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput"></a>

```go
func CronSpecInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `CronJobDuration`<sup>Required</sup> <a name="CronJobDuration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration"></a>

```go
func CronJobDuration() *string
```

- *Type:* *string

---

##### `CronSpec`<sup>Required</sup> <a name="CronSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec"></a>

```go
func CronSpec() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigScalingConfigsSelectorsList <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectorsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigScalingConfigsSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGameServicesGameServerConfigScalingConfigsSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get"></a>

```go
func Get(index *f64) GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerConfigTimeoutsOutputReference <a name="GoogleGameServicesGameServerConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverconfig"

googlegameservicesgameserverconfig.NewGoogleGameServicesGameServerConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGameServicesGameServerConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



