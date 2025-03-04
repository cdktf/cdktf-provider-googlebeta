# `googleApigeeEnvironment` Submodule <a name="`googleApigeeEnvironment` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironment <a name="GoogleApigeeEnvironment" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment google_apigee_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.NewGoogleApigeeEnvironment(scope Construct, id *string, config GoogleApigeeEnvironmentConfig) GoogleApigeeEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig">GoogleApigeeEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig">GoogleApigeeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetApiProxyType">ResetApiProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetForwardProxyUri">ResetForwardProxyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putNodeConfig"></a>

```go
func PutNodeConfig(value GoogleApigeeEnvironmentNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putProperties"></a>

```go
func PutProperties(value GoogleApigeeEnvironmentProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties">GoogleApigeeEnvironmentProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>

---

##### `ResetApiProxyType` <a name="ResetApiProxyType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetApiProxyType"></a>

```go
func ResetApiProxyType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetForwardProxyUri` <a name="ResetForwardProxyUri" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetForwardProxyUri"></a>

```go
func ResetForwardProxyUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetNodeConfig"></a>

```go
func ResetNodeConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.GoogleApigeeEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.GoogleApigeeEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.GoogleApigeeEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.GoogleApigeeEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference">GoogleApigeeEnvironmentNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference">GoogleApigeeEnvironmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference">GoogleApigeeEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyTypeInput">ApiProxyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUriInput">ForwardProxyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties">GoogleApigeeEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyType">ApiProxyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUri">ForwardProxyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfig"></a>

```go
func NodeConfig() GoogleApigeeEnvironmentNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference">GoogleApigeeEnvironmentNodeConfigOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.properties"></a>

```go
func Properties() GoogleApigeeEnvironmentPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference">GoogleApigeeEnvironmentPropertiesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference">GoogleApigeeEnvironmentTimeoutsOutputReference</a>

---

##### `ApiProxyTypeInput`<sup>Optional</sup> <a name="ApiProxyTypeInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyTypeInput"></a>

```go
func ApiProxyTypeInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ForwardProxyUriInput`<sup>Optional</sup> <a name="ForwardProxyUriInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUriInput"></a>

```go
func ForwardProxyUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfigInput"></a>

```go
func NodeConfigInput() GoogleApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties">GoogleApigeeEnvironmentProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApiProxyType`<sup>Required</sup> <a name="ApiProxyType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyType"></a>

```go
func ApiProxyType() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ForwardProxyUri`<sup>Required</sup> <a name="ForwardProxyUri" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUri"></a>

```go
func ForwardProxyUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentConfig <a name="GoogleApigeeEnvironmentConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

&googleapigeeenvironment.GoogleApigeeEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OrgId: *string,
	ApiProxyType: *string,
	DeploymentType: *string,
	Description: *string,
	DisplayName: *string,
	ForwardProxyUri: *string,
	Id: *string,
	NodeConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig,
	Properties: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.apiProxyType">ApiProxyType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | Description of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forwardProxyUri">ForwardProxyUri</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#id GoogleApigeeEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties">GoogleApigeeEnvironmentProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.type">Type</a></code> | <code>*string</code> | Types that can be selected for an Environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#name GoogleApigeeEnvironment#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#org_id GoogleApigeeEnvironment#org_id}

---

##### `ApiProxyType`<sup>Optional</sup> <a name="ApiProxyType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.apiProxyType"></a>

```go
ApiProxyType *string
```

- *Type:* *string

Optional.

API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#api_proxy_type GoogleApigeeEnvironment#api_proxy_type}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Optional.

Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#deployment_type GoogleApigeeEnvironment#deployment_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#description GoogleApigeeEnvironment#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#display_name GoogleApigeeEnvironment#display_name}

---

##### `ForwardProxyUri`<sup>Optional</sup> <a name="ForwardProxyUri" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forwardProxyUri"></a>

```go
ForwardProxyUri *string
```

- *Type:* *string

Optional.

URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#forward_proxy_uri GoogleApigeeEnvironment#forward_proxy_uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#id GoogleApigeeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.nodeConfig"></a>

```go
NodeConfig GoogleApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#node_config GoogleApigeeEnvironment#node_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.properties"></a>

```go
Properties GoogleApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties">GoogleApigeeEnvironmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#properties GoogleApigeeEnvironment#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#timeouts GoogleApigeeEnvironment#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Types that can be selected for an Environment.

Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments. Possible values: ["ENVIRONMENT_TYPE_UNSPECIFIED", "BASE", "INTERMEDIATE", "COMPREHENSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#type GoogleApigeeEnvironment#type}

---

### GoogleApigeeEnvironmentNodeConfig <a name="GoogleApigeeEnvironmentNodeConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

&googleapigeeenvironment.GoogleApigeeEnvironmentNodeConfig {
	MaxNodeCount: *string,
	MinNodeCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.maxNodeCount">MaxNodeCount</a></code> | <code>*string</code> | The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.minNodeCount">MinNodeCount</a></code> | <code>*string</code> | The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. |

---

##### `MaxNodeCount`<sup>Optional</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.maxNodeCount"></a>

```go
MaxNodeCount *string
```

- *Type:* *string

The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#max_node_count GoogleApigeeEnvironment#max_node_count}

---

##### `MinNodeCount`<sup>Optional</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.minNodeCount"></a>

```go
MinNodeCount *string
```

- *Type:* *string

The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#min_node_count GoogleApigeeEnvironment#min_node_count}

---

### GoogleApigeeEnvironmentProperties <a name="GoogleApigeeEnvironmentProperties" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

&googleapigeeenvironment.GoogleApigeeEnvironmentProperties {
	Property: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties.property.property">Property</a></code> | <code>interface{}</code> | property block. |

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties.property.property"></a>

```go
Property interface{}
```

- *Type:* interface{}

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#property GoogleApigeeEnvironment#property}

---

### GoogleApigeeEnvironmentPropertiesProperty <a name="GoogleApigeeEnvironmentPropertiesProperty" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

&googleapigeeenvironment.GoogleApigeeEnvironmentPropertiesProperty {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesProperty.property.name">Name</a></code> | <code>*string</code> | The property key. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesProperty.property.value">Value</a></code> | <code>*string</code> | The property value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

The property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#name GoogleApigeeEnvironment#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesProperty.property.value"></a>

```go
Value *string
```

- *Type:* *string

The property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#value GoogleApigeeEnvironment#value}

---

### GoogleApigeeEnvironmentTimeouts <a name="GoogleApigeeEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

&googleapigeeenvironment.GoogleApigeeEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#create GoogleApigeeEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#delete GoogleApigeeEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#update GoogleApigeeEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#create GoogleApigeeEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#delete GoogleApigeeEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_environment#update GoogleApigeeEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentNodeConfigOutputReference <a name="GoogleApigeeEnvironmentNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.NewGoogleApigeeEnvironmentNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeEnvironmentNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount">ResetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount">ResetMinNodeCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodeCount` <a name="ResetMaxNodeCount" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount"></a>

```go
func ResetMaxNodeCount()
```

##### `ResetMinNodeCount` <a name="ResetMinNodeCount" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount"></a>

```go
func ResetMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount">CurrentAggregateNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentAggregateNodeCount`<sup>Required</sup> <a name="CurrentAggregateNodeCount" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount"></a>

```go
func CurrentAggregateNodeCount() *string
```

- *Type:* *string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *string
```

- *Type:* *string

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *string
```

- *Type:* *string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *string
```

- *Type:* *string

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

---


### GoogleApigeeEnvironmentPropertiesOutputReference <a name="GoogleApigeeEnvironmentPropertiesOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.NewGoogleApigeeEnvironmentPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeEnvironmentPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperty` <a name="PutProperty" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.putProperty"></a>

```go
func PutProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.resetProperty"></a>

```go
func ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.property">Property</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList">GoogleApigeeEnvironmentPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.propertyInput">PropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties">GoogleApigeeEnvironmentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.property"></a>

```go
func Property() GoogleApigeeEnvironmentPropertiesPropertyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList">GoogleApigeeEnvironmentPropertiesPropertyList</a>

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.propertyInput"></a>

```go
func PropertyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentProperties">GoogleApigeeEnvironmentProperties</a>

---


### GoogleApigeeEnvironmentPropertiesPropertyList <a name="GoogleApigeeEnvironmentPropertiesPropertyList" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.NewGoogleApigeeEnvironmentPropertiesPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApigeeEnvironmentPropertiesPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.get"></a>

```go
func Get(index *f64) GoogleApigeeEnvironmentPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeEnvironmentPropertiesPropertyOutputReference <a name="GoogleApigeeEnvironmentPropertiesPropertyOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.NewGoogleApigeeEnvironmentPropertiesPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApigeeEnvironmentPropertiesPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentPropertiesPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeEnvironmentTimeoutsOutputReference <a name="GoogleApigeeEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleapigeeenvironment"

googleapigeeenvironment.NewGoogleApigeeEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



