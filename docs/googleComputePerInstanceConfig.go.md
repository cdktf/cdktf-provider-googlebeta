# `googleComputePerInstanceConfig` Submodule <a name="`googleComputePerInstanceConfig` Submodule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePerInstanceConfig <a name="GoogleComputePerInstanceConfig" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config google_compute_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfig(scope Construct, id *string, config GoogleComputePerInstanceConfigConfig) GoogleComputePerInstanceConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig">GoogleComputePerInstanceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig">GoogleComputePerInstanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState">PutPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMinimalAction">ResetMinimalAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetPreservedState">ResetPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceOnDestroy">ResetRemoveInstanceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy">ResetRemoveInstanceStateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPreservedState` <a name="PutPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState"></a>

```go
func PutPreservedState(value GoogleComputePerInstanceConfigPreservedState)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputePerInstanceConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetMinimalAction` <a name="ResetMinimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMinimalAction"></a>

```go
func ResetMinimalAction()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```go
func ResetMostDisruptiveAllowedAction()
```

##### `ResetPreservedState` <a name="ResetPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetPreservedState"></a>

```go
func ResetPreservedState()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRemoveInstanceOnDestroy` <a name="ResetRemoveInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceOnDestroy"></a>

```go
func ResetRemoveInstanceOnDestroy()
```

##### `ResetRemoveInstanceStateOnDestroy` <a name="ResetRemoveInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```go
func ResetRemoveInstanceStateOnDestroy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePerInstanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.GoogleComputePerInstanceConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.GoogleComputePerInstanceConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.GoogleComputePerInstanceConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.GoogleComputePerInstanceConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputePerInstanceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputePerInstanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputePerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedState">PreservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference">GoogleComputePerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference">GoogleComputePerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManagerInput">InstanceGroupManagerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalActionInput">MinimalActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedStateInput">PreservedStateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroyInput">RemoveInstanceOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput">RemoveInstanceStateOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalAction">MinimalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroy">RemoveInstanceOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroy">RemoveInstanceStateOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PreservedState`<sup>Required</sup> <a name="PreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedState"></a>

```go
func PreservedState() GoogleComputePerInstanceConfigPreservedStateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference">GoogleComputePerInstanceConfigPreservedStateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeouts"></a>

```go
func Timeouts() GoogleComputePerInstanceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference">GoogleComputePerInstanceConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceGroupManagerInput`<sup>Optional</sup> <a name="InstanceGroupManagerInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManagerInput"></a>

```go
func InstanceGroupManagerInput() *string
```

- *Type:* *string

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalActionInput"></a>

```go
func MinimalActionInput() *string
```

- *Type:* *string

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```go
func MostDisruptiveAllowedActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PreservedStateInput`<sup>Optional</sup> <a name="PreservedStateInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedStateInput"></a>

```go
func PreservedStateInput() GoogleComputePerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RemoveInstanceOnDestroyInput`<sup>Optional</sup> <a name="RemoveInstanceOnDestroyInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroyInput"></a>

```go
func RemoveInstanceOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveInstanceStateOnDestroyInput`<sup>Optional</sup> <a name="RemoveInstanceStateOnDestroyInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```go
func RemoveInstanceStateOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManager"></a>

```go
func InstanceGroupManager() *string
```

- *Type:* *string

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalAction"></a>

```go
func MinimalAction() *string
```

- *Type:* *string

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```go
func MostDisruptiveAllowedAction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RemoveInstanceOnDestroy`<sup>Required</sup> <a name="RemoveInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroy"></a>

```go
func RemoveInstanceOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `RemoveInstanceStateOnDestroy`<sup>Required</sup> <a name="RemoveInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```go
func RemoveInstanceStateOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePerInstanceConfigConfig <a name="GoogleComputePerInstanceConfigConfig" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceGroupManager: *string,
	Name: *string,
	Id: *string,
	MinimalAction: *string,
	MostDisruptiveAllowedAction: *string,
	PreservedState: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState,
	Project: *string,
	RemoveInstanceOnDestroy: interface{},
	RemoveInstanceStateOnDestroy: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.instanceGroupManager">InstanceGroupManager</a></code> | <code>*string</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.name">Name</a></code> | <code>*string</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.minimalAction">MinimalAction</a></code> | <code>*string</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>*string</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.preservedState">PreservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceOnDestroy">RemoveInstanceOnDestroy</a></code> | <code>interface{}</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy">RemoveInstanceStateOnDestroy</a></code> | <code>interface{}</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the containing instance group manager is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceGroupManager`<sup>Required</sup> <a name="InstanceGroupManager" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.instanceGroupManager"></a>

```go
InstanceGroupManager *string
```

- *Type:* *string

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#instance_group_manager GoogleComputePerInstanceConfig#instance_group_manager}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#name GoogleComputePerInstanceConfig#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimalAction`<sup>Optional</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.minimalAction"></a>

```go
MinimalAction *string
```

- *Type:* *string

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#minimal_action GoogleComputePerInstanceConfig#minimal_action}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

```go
MostDisruptiveAllowedAction *string
```

- *Type:* *string

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#most_disruptive_allowed_action GoogleComputePerInstanceConfig#most_disruptive_allowed_action}

---

##### `PreservedState`<sup>Optional</sup> <a name="PreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.preservedState"></a>

```go
PreservedState GoogleComputePerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#preserved_state GoogleComputePerInstanceConfig#preserved_state}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}.

---

##### `RemoveInstanceOnDestroy`<sup>Optional</sup> <a name="RemoveInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceOnDestroy"></a>

```go
RemoveInstanceOnDestroy interface{}
```

- *Type:* interface{}

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#remove_instance_on_destroy GoogleComputePerInstanceConfig#remove_instance_on_destroy}

---

##### `RemoveInstanceStateOnDestroy`<sup>Optional</sup> <a name="RemoveInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```go
RemoveInstanceStateOnDestroy interface{}
```

- *Type:* interface{}

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#remove_instance_state_on_destroy GoogleComputePerInstanceConfig#remove_instance_state_on_destroy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleComputePerInstanceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#timeouts GoogleComputePerInstanceConfig#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#zone GoogleComputePerInstanceConfig#zone}

---

### GoogleComputePerInstanceConfigPreservedState <a name="GoogleComputePerInstanceConfigPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigPreservedState {
	Disk: interface{},
	ExternalIp: interface{},
	InternalIp: interface{},
	Metadata: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.disk">Disk</a></code> | <code>interface{}</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.externalIp">ExternalIp</a></code> | <code>interface{}</code> | external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.internalIp">InternalIp</a></code> | <code>interface{}</code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.disk"></a>

```go
Disk interface{}
```

- *Type:* interface{}

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#disk GoogleComputePerInstanceConfig#disk}

---

##### `ExternalIp`<sup>Optional</sup> <a name="ExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.externalIp"></a>

```go
ExternalIp interface{}
```

- *Type:* interface{}

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#external_ip GoogleComputePerInstanceConfig#external_ip}

---

##### `InternalIp`<sup>Optional</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.internalIp"></a>

```go
InternalIp interface{}
```

- *Type:* interface{}

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#internal_ip GoogleComputePerInstanceConfig#internal_ip}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#metadata GoogleComputePerInstanceConfig#metadata}

---

### GoogleComputePerInstanceConfigPreservedStateDisk <a name="GoogleComputePerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigPreservedStateDisk {
	DeviceName: *string,
	Source: *string,
	DeleteRule: *string,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.source">Source</a></code> | <code>*string</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.mode">Mode</a></code> | <code>*string</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#device_name GoogleComputePerInstanceConfig#device_name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.source"></a>

```go
Source *string
```

- *Type:* *string

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#source GoogleComputePerInstanceConfig#source}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```go
DeleteRule *string
```

- *Type:* *string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#delete_rule GoogleComputePerInstanceConfig#delete_rule}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#mode GoogleComputePerInstanceConfig#mode}

---

### GoogleComputePerInstanceConfigPreservedStateExternalIp <a name="GoogleComputePerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigPreservedStateExternalIp {
	InterfaceName: *string,
	AutoDelete: *string,
	IpAddress: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete">AutoDelete</a></code> | <code>*string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```go
InterfaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}.

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```go
AutoDelete *string
```

- *Type:* *string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#auto_delete GoogleComputePerInstanceConfig#auto_delete}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```go
IpAddress GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#ip_address GoogleComputePerInstanceConfig#ip_address}

---

### GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress {
	Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address">Address</a></code> | <code>*string</code> | The URL of the reservation for this IP address. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```go
Address *string
```

- *Type:* *string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#address GoogleComputePerInstanceConfig#address}

---

### GoogleComputePerInstanceConfigPreservedStateInternalIp <a name="GoogleComputePerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigPreservedStateInternalIp {
	InterfaceName: *string,
	AutoDelete: *string,
	IpAddress: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete">AutoDelete</a></code> | <code>*string</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```go
InterfaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}.

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```go
AutoDelete *string
```

- *Type:* *string

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#auto_delete GoogleComputePerInstanceConfig#auto_delete}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```go
IpAddress GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#ip_address GoogleComputePerInstanceConfig#ip_address}

---

### GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress {
	Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address">Address</a></code> | <code>*string</code> | The URL of the reservation for this IP address. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```go
Address *string
```

- *Type:* *string

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#address GoogleComputePerInstanceConfig#address}

---

### GoogleComputePerInstanceConfigTimeouts <a name="GoogleComputePerInstanceConfigTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

&googlecomputeperinstanceconfig.GoogleComputePerInstanceConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#create GoogleComputePerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#delete GoogleComputePerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#update GoogleComputePerInstanceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#create GoogleComputePerInstanceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#delete GoogleComputePerInstanceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_per_instance_config#update GoogleComputePerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePerInstanceConfigPreservedStateDiskList <a name="GoogleComputePerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputePerInstanceConfigPreservedStateDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get"></a>

```go
func Get(index *f64) GoogleComputePerInstanceConfigPreservedStateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputePerInstanceConfigPreservedStateDiskOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputePerInstanceConfigPreservedStateDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```go
func ResetDeleteRule()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```go
func DeleteRuleInput() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```go
func DeleteRule() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```go
func ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpList <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateExternalIpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputePerInstanceConfigPreservedStateExternalIpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get"></a>

```go
func Get(index *f64) GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">PutIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAddress` <a name="PutIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```go
func PutIpAddress(value GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```go
func ResetAutoDelete()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">AutoDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```go
func IpAddress() GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```go
func AutoDeleteInput() *string
```

- *Type:* *string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```go
func InterfaceNameInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```go
func AutoDelete() *string
```

- *Type:* *string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```go
func InterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```go
func ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpList <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateInternalIpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputePerInstanceConfigPreservedStateInternalIpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get"></a>

```go
func Get(index *f64) GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">PutIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAddress` <a name="PutIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```go
func PutIpAddress(value GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```go
func ResetAutoDelete()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">IpAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">AutoDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```go
func IpAddress() GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```go
func AutoDeleteInput() *string
```

- *Type:* *string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```go
func InterfaceNameInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```go
func AutoDelete() *string
```

- *Type:* *string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```go
func InterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputePerInstanceConfigPreservedStateOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigPreservedStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputePerInstanceConfigPreservedStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp">PutExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp">PutInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp">ResetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp">ResetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```go
func PutDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExternalIp` <a name="PutExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```go
func PutExternalIp(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInternalIp` <a name="PutInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```go
func PutInternalIp(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```go
func ResetDisk()
```

##### `ResetExternalIp` <a name="ResetExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```go
func ResetExternalIp()
```

##### `ResetInternalIp` <a name="ResetInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```go
func ResetInternalIp()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList">GoogleComputePerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIp">ExternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList">GoogleComputePerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIp">InternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList">GoogleComputePerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.diskInput">DiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput">ExternalIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput">InternalIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```go
func Disk() GoogleComputePerInstanceConfigPreservedStateDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList">GoogleComputePerInstanceConfigPreservedStateDiskList</a>

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```go
func ExternalIp() GoogleComputePerInstanceConfigPreservedStateExternalIpList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList">GoogleComputePerInstanceConfigPreservedStateExternalIpList</a>

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```go
func InternalIp() GoogleComputePerInstanceConfigPreservedStateInternalIpList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList">GoogleComputePerInstanceConfigPreservedStateInternalIpList</a>

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```go
func DiskInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalIpInput`<sup>Optional</sup> <a name="ExternalIpInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```go
func ExternalIpInput() interface{}
```

- *Type:* interface{}

---

##### `InternalIpInput`<sup>Optional</sup> <a name="InternalIpInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```go
func InternalIpInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputePerInstanceConfigPreservedState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---


### GoogleComputePerInstanceConfigTimeoutsOutputReference <a name="GoogleComputePerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecomputeperinstanceconfig"

googlecomputeperinstanceconfig.NewGoogleComputePerInstanceConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputePerInstanceConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



