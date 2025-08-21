# `googleApigeeSecurityMonitoringCondition` Submodule <a name="`googleApigeeSecurityMonitoringCondition` Submodule" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityMonitoringCondition <a name="GoogleApigeeSecurityMonitoringCondition" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition google_apigee_security_monitoring_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

googleapigeesecuritymonitoringcondition.NewGoogleApigeeSecurityMonitoringCondition(scope Construct, id *string, config GoogleApigeeSecurityMonitoringConditionConfig) GoogleApigeeSecurityMonitoringCondition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig">GoogleApigeeSecurityMonitoringConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig">GoogleApigeeSecurityMonitoringConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources">PutIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources">ResetIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIncludeAllResources` <a name="PutIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources"></a>

```go
func PutIncludeAllResources(value GoogleApigeeSecurityMonitoringConditionIncludeAllResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeSecurityMonitoringConditionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeAllResources` <a name="ResetIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources"></a>

```go
func ResetIncludeAllResources()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

googleapigeesecuritymonitoringcondition.GoogleApigeeSecurityMonitoringCondition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

googleapigeesecuritymonitoringcondition.GoogleApigeeSecurityMonitoringCondition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

googleapigeesecuritymonitoringcondition.GoogleApigeeSecurityMonitoringCondition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

googleapigeesecuritymonitoringcondition.GoogleApigeeSecurityMonitoringCondition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeSecurityMonitoringCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeSecurityMonitoringCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityMonitoringCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources">TotalDeployedResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources">TotalMonitoredResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput">ConditionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput">IncludeAllResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId">ConditionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `IncludeAllResources`<sup>Required</sup> <a name="IncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources"></a>

```go
func IncludeAllResources() GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a>

---

##### `TotalDeployedResources`<sup>Required</sup> <a name="TotalDeployedResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources"></a>

```go
func TotalDeployedResources() *f64
```

- *Type:* *f64

---

##### `TotalMonitoredResources`<sup>Required</sup> <a name="TotalMonitoredResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources"></a>

```go
func TotalMonitoredResources() *f64
```

- *Type:* *f64

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ConditionIdInput`<sup>Optional</sup> <a name="ConditionIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput"></a>

```go
func ConditionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeAllResourcesInput`<sup>Optional</sup> <a name="IncludeAllResourcesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput"></a>

```go
func IncludeAllResourcesInput() GoogleApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId"></a>

```go
func ConditionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityMonitoringConditionConfig <a name="GoogleApigeeSecurityMonitoringConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

&googleapigeesecuritymonitoringcondition.GoogleApigeeSecurityMonitoringConditionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConditionId: *string,
	OrgId: *string,
	Profile: *string,
	Scope: *string,
	Id: *string,
	IncludeAllResources: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId">ConditionId</a></code> | <code>*string</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile">Profile</a></code> | <code>*string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope">Scope</a></code> | <code>*string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId"></a>

```go
ConditionId *string
```

- *Type:* *string

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#condition_id GoogleApigeeSecurityMonitoringCondition#condition_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#org_id GoogleApigeeSecurityMonitoringCondition#org_id}

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#profile GoogleApigeeSecurityMonitoringCondition#profile}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#scope GoogleApigeeSecurityMonitoringCondition#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeAllResources`<sup>Optional</sup> <a name="IncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources"></a>

```go
IncludeAllResources GoogleApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#include_all_resources GoogleApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeSecurityMonitoringConditionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#timeouts GoogleApigeeSecurityMonitoringCondition#timeouts}

---

### GoogleApigeeSecurityMonitoringConditionIncludeAllResources <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResources" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

&googleapigeesecuritymonitoringcondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources {

}
```


### GoogleApigeeSecurityMonitoringConditionTimeouts <a name="GoogleApigeeSecurityMonitoringConditionTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

&googleapigeesecuritymonitoringcondition.GoogleApigeeSecurityMonitoringConditionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

googleapigeesecuritymonitoringcondition.NewGoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeSecurityMonitoringConditionIncludeAllResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---


### GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference <a name="GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecuritymonitoringcondition"

googleapigeesecuritymonitoringcondition.NewGoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



