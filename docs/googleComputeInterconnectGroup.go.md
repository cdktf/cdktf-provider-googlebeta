# `googleComputeInterconnectGroup` Submodule <a name="`googleComputeInterconnectGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectGroup <a name="GoogleComputeInterconnectGroup" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group google_compute_interconnect_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroup(scope Construct, id *string, config GoogleComputeInterconnectGroupConfig) GoogleComputeInterconnectGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig">GoogleComputeInterconnectGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig">GoogleComputeInterconnectGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent">PutIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects">PutInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects">ResetInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIntent` <a name="PutIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent"></a>

```go
func PutIntent(value GoogleComputeInterconnectGroupIntent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `PutInterconnects` <a name="PutInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects"></a>

```go
func PutInterconnects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeInterconnectGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnects` <a name="ResetInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects"></a>

```go
func ResetInterconnects()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.GoogleComputeInterconnectGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.GoogleComputeInterconnectGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.GoogleComputeInterconnectGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.GoogleComputeInterconnectGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeInterconnectGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeInterconnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured">Configured</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects">Interconnects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure">PhysicalStructure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput">IntentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput">InterconnectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured"></a>

```go
func Configured() GoogleComputeInterconnectGroupConfiguredList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent"></a>

```go
func Intent() GoogleComputeInterconnectGroupIntentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a>

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects"></a>

```go
func Interconnects() GoogleComputeInterconnectGroupInterconnectsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a>

---

##### `PhysicalStructure`<sup>Required</sup> <a name="PhysicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure"></a>

```go
func PhysicalStructure() GoogleComputeInterconnectGroupPhysicalStructureList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts"></a>

```go
func Timeouts() GoogleComputeInterconnectGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput"></a>

```go
func IntentInput() GoogleComputeInterconnectGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `InterconnectsInput`<sup>Optional</sup> <a name="InterconnectsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput"></a>

```go
func InterconnectsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectGroupConfig <a name="GoogleComputeInterconnectGroupConfig" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Intent: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent,
	Name: *string,
	Description: *string,
	Id: *string,
	Interconnects: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects">Interconnects</a></code> | <code>interface{}</code> | interconnects block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent"></a>

```go
Intent GoogleComputeInterconnectGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#intent GoogleComputeInterconnectGroup#intent}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#description GoogleComputeInterconnectGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnects`<sup>Optional</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects"></a>

```go
Interconnects interface{}
```

- *Type:* interface{}

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#interconnects GoogleComputeInterconnectGroup#interconnects}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeInterconnectGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#timeouts GoogleComputeInterconnectGroup#timeouts}

---

### GoogleComputeInterconnectGroupConfigured <a name="GoogleComputeInterconnectGroupConfigured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupConfigured {

}
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapability <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability {

}
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers {

}
```


### GoogleComputeInterconnectGroupIntent <a name="GoogleComputeInterconnectGroupIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupIntent {
	TopologyCapability: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability">TopologyCapability</a></code> | <code>*string</code> | The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs. |

---

##### `TopologyCapability`<sup>Optional</sup> <a name="TopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability"></a>

```go
TopologyCapability *string
```

- *Type:* *string

The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs.

Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#topology_capability GoogleComputeInterconnectGroup#topology_capability}

---

### GoogleComputeInterconnectGroupInterconnects <a name="GoogleComputeInterconnectGroupInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupInterconnects {
	Name: *string,
	Interconnect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect">Interconnect</a></code> | <code>*string</code> | The URL of an Interconnect in this group. All Interconnects in the group are unique. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect"></a>

```go
Interconnect *string
```

- *Type:* *string

The URL of an Interconnect in this group. All Interconnects in the group are unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#interconnect GoogleComputeInterconnectGroup#interconnect}

---

### GoogleComputeInterconnectGroupPhysicalStructure <a name="GoogleComputeInterconnectGroupPhysicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupPhysicalStructure {

}
```


### GoogleComputeInterconnectGroupPhysicalStructureMetros <a name="GoogleComputeInterconnectGroupPhysicalStructureMetros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupPhysicalStructureMetros {

}
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities {

}
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones {

}
```


### GoogleComputeInterconnectGroupTimeouts <a name="GoogleComputeInterconnectGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

&googlecomputeinterconnectgroup.GoogleComputeInterconnectGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectGroupConfiguredList <a name="GoogleComputeInterconnectGroupConfiguredList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupConfiguredList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupConfiguredList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupConfiguredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectGroupConfiguredOutputReference <a name="GoogleComputeInterconnectGroupConfiguredOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupConfiguredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupConfiguredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability">TopologyCapability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopologyCapability`<sup>Required</sup> <a name="TopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability"></a>

```go
func TopologyCapability() GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupConfigured
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType">BlockerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink">DocumentationLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation">Explanation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities">Facilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects">Interconnects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros">Metros</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockerType`<sup>Required</sup> <a name="BlockerType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType"></a>

```go
func BlockerType() *string
```

- *Type:* *string

---

##### `DocumentationLink`<sup>Required</sup> <a name="DocumentationLink" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink"></a>

```go
func DocumentationLink() *string
```

- *Type:* *string

---

##### `Explanation`<sup>Required</sup> <a name="Explanation" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation"></a>

```go
func Explanation() *string
```

- *Type:* *string

---

##### `Facilities`<sup>Required</sup> <a name="Facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities"></a>

```go
func Facilities() *[]*string
```

- *Type:* *[]*string

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects"></a>

```go
func Interconnects() *[]*string
```

- *Type:* *[]*string

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros"></a>

```go
func Metros() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupConfiguredTopologyCapabilityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers">IntendedCapabilityBlockers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla">SupportedSla</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntendedCapabilityBlockers`<sup>Required</sup> <a name="IntendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers"></a>

```go
func IntendedCapabilityBlockers() GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a>

---

##### `SupportedSla`<sup>Required</sup> <a name="SupportedSla" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla"></a>

```go
func SupportedSla() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupConfiguredTopologyCapability
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a>

---


### GoogleComputeInterconnectGroupIntentOutputReference <a name="GoogleComputeInterconnectGroupIntentOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupIntentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectGroupIntentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability">ResetTopologyCapability</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopologyCapability` <a name="ResetTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability"></a>

```go
func ResetTopologyCapability()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput">TopologyCapabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability">TopologyCapability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopologyCapabilityInput`<sup>Optional</sup> <a name="TopologyCapabilityInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput"></a>

```go
func TopologyCapabilityInput() *string
```

- *Type:* *string

---

##### `TopologyCapability`<sup>Required</sup> <a name="TopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability"></a>

```go
func TopologyCapability() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---


### GoogleComputeInterconnectGroupInterconnectsList <a name="GoogleComputeInterconnectGroupInterconnectsList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupInterconnectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupInterconnectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupInterconnectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectGroupInterconnectsOutputReference <a name="GoogleComputeInterconnectGroupInterconnectsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupInterconnectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupInterconnectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect">ResetInterconnect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect"></a>

```go
func ResetInterconnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput">InterconnectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect">Interconnect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput"></a>

```go
func InterconnectInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect"></a>

```go
func Interconnect() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectGroupPhysicalStructureList <a name="GoogleComputeInterconnectGroupPhysicalStructureList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupPhysicalStructureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupPhysicalStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility">Facility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones">Zones</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Facility`<sup>Required</sup> <a name="Facility" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility"></a>

```go
func Facility() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones"></a>

```go
func Zones() GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects">Interconnects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Interconnects`<sup>Required</sup> <a name="Interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects"></a>

```go
func Interconnects() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureMetrosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectGroupPhysicalStructureMetrosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities">Facilities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro">Metro</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Facilities`<sup>Required</sup> <a name="Facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities"></a>

```go
func Facilities() GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a>

---

##### `Metro`<sup>Required</sup> <a name="Metro" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro"></a>

```go
func Metro() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupPhysicalStructureMetros
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupPhysicalStructureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectGroupPhysicalStructureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros">Metros</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros"></a>

```go
func Metros() GoogleComputeInterconnectGroupPhysicalStructureMetrosList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectGroupPhysicalStructure
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a>

---


### GoogleComputeInterconnectGroupTimeoutsOutputReference <a name="GoogleComputeInterconnectGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlecomputeinterconnectgroup"

googlecomputeinterconnectgroup.NewGoogleComputeInterconnectGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



