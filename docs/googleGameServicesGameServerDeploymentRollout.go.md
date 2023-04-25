# `google_game_services_game_server_deployment_rollout`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_deployment_rollout`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout).

# `googleGameServicesGameServerDeploymentRollout` Submodule <a name="`googleGameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerDeploymentRollout <a name="GoogleGameServicesGameServerDeploymentRollout" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.NewGoogleGameServicesGameServerDeploymentRollout(scope Construct, id *string, config GoogleGameServicesGameServerDeploymentRolloutConfig) GoogleGameServicesGameServerDeploymentRollout
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig">GoogleGameServicesGameServerDeploymentRolloutConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig">GoogleGameServicesGameServerDeploymentRolloutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides">PutGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides">ResetGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGameServerConfigOverrides` <a name="PutGameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides"></a>

```go
func PutGameServerConfigOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putGameServerConfigOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGameServicesGameServerDeploymentRolloutTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

---

##### `ResetGameServerConfigOverrides` <a name="ResetGameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides"></a>

```go
func ResetGameServerConfigOverrides()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.GoogleGameServicesGameServerDeploymentRollout_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.GoogleGameServicesGameServerDeploymentRollout_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.GoogleGameServicesGameServerDeploymentRollout_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">GameServerConfigOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput">DefaultGameServerConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput">GameServerConfigOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">DefaultGameServerConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GameServerConfigOverrides`<sup>Required</sup> <a name="GameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```go
func GameServerConfigOverrides() GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeouts"></a>

```go
func Timeouts() GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a>

---

##### `DefaultGameServerConfigInput`<sup>Optional</sup> <a name="DefaultGameServerConfigInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput"></a>

```go
func DefaultGameServerConfigInput() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `GameServerConfigOverridesInput`<sup>Optional</sup> <a name="GameServerConfigOverridesInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput"></a>

```go
func GameServerConfigOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultGameServerConfig`<sup>Required</sup> <a name="DefaultGameServerConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```go
func DefaultGameServerConfig() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerDeploymentRolloutConfig <a name="GoogleGameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

&googlegameservicesgameserverdeploymentrollout.GoogleGameServicesGameServerDeploymentRolloutConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultGameServerConfig: *string,
	DeploymentId: *string,
	GameServerConfigOverrides: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig">DefaultGameServerConfig</a></code> | <code>*string</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides">GameServerConfigOverrides</a></code> | <code>interface{}</code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultGameServerConfig`<sup>Required</sup> <a name="DefaultGameServerConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig"></a>

```go
DefaultGameServerConfig *string
```

- *Type:* *string

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#default_game_server_config GoogleGameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#deployment_id GoogleGameServicesGameServerDeploymentRollout#deployment_id}

---

##### `GameServerConfigOverrides`<sup>Optional</sup> <a name="GameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides"></a>

```go
GameServerConfigOverrides interface{}
```

- *Type:* interface{}

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#game_server_config_overrides GoogleGameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#id GoogleGameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#project GoogleGameServicesGameServerDeploymentRollout#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutConfig.property.timeouts"></a>

```go
Timeouts GoogleGameServicesGameServerDeploymentRolloutTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts">GoogleGameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#timeouts GoogleGameServicesGameServerDeploymentRollout#timeouts}

---

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

&googlegameservicesgameserverdeploymentrollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides {
	ConfigVersion: *string,
	RealmsSelector: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion">ConfigVersion</a></code> | <code>*string</code> | Version of the configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector">RealmsSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | realms_selector block. |

---

##### `ConfigVersion`<sup>Optional</sup> <a name="ConfigVersion" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion"></a>

```go
ConfigVersion *string
```

- *Type:* *string

Version of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#config_version GoogleGameServicesGameServerDeploymentRollout#config_version}

---

##### `RealmsSelector`<sup>Optional</sup> <a name="RealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector"></a>

```go
RealmsSelector GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

realms_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#realms_selector GoogleGameServicesGameServerDeploymentRollout#realms_selector}

---

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

&googlegameservicesgameserverdeploymentrollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {
	Realms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms">Realms</a></code> | <code>*[]*string</code> | List of realms to match against. |

---

##### `Realms`<sup>Optional</sup> <a name="Realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms"></a>

```go
Realms *[]*string
```

- *Type:* *[]*string

List of realms to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#realms GoogleGameServicesGameServerDeploymentRollout#realms}

---

### GoogleGameServicesGameServerDeploymentRolloutTimeouts <a name="GoogleGameServicesGameServerDeploymentRolloutTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

&googlegameservicesgameserverdeploymentrollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#create GoogleGameServicesGameServerDeploymentRollout#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#delete GoogleGameServicesGameServerDeploymentRollout#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#update GoogleGameServicesGameServerDeploymentRollout#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#create GoogleGameServicesGameServerDeploymentRollout#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#delete GoogleGameServicesGameServerDeploymentRollout#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_game_services_game_server_deployment_rollout#update GoogleGameServicesGameServerDeploymentRollout#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.NewGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```go
func Get(index *f64) GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.NewGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector">PutRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion">ResetConfigVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector">ResetRealmsSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRealmsSelector` <a name="PutRealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector"></a>

```go
func PutRealmsSelector(value GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `ResetConfigVersion` <a name="ResetConfigVersion" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion"></a>

```go
func ResetConfigVersion()
```

##### `ResetRealmsSelector` <a name="ResetRealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector"></a>

```go
func ResetRealmsSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">RealmsSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput">ConfigVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput">RealmsSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">ConfigVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealmsSelector`<sup>Required</sup> <a name="RealmsSelector" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```go
func RealmsSelector() GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a>

---

##### `ConfigVersionInput`<sup>Optional</sup> <a name="ConfigVersionInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput"></a>

```go
func ConfigVersionInput() *string
```

- *Type:* *string

---

##### `RealmsSelectorInput`<sup>Optional</sup> <a name="RealmsSelectorInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput"></a>

```go
func RealmsSelectorInput() GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```go
func ConfigVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.NewGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms">ResetRealms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRealms` <a name="ResetRealms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms"></a>

```go
func ResetRealms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput">RealmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">Realms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealmsInput`<sup>Optional</sup> <a name="RealmsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput"></a>

```go
func RealmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Realms`<sup>Required</sup> <a name="Realms" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```go
func Realms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---


### GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference <a name="GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegameservicesgameserverdeploymentrollout"

googlegameservicesgameserverdeploymentrollout.NewGoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerDeploymentRollout.GoogleGameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



