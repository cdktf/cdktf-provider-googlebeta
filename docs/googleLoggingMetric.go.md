# `googleLoggingMetric` Submodule <a name="`googleLoggingMetric` Submodule" id="@cdktf/provider-google-beta.googleLoggingMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingMetric <a name="GoogleLoggingMetric" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric google_logging_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetric(scope Construct, id *string, config GoogleLoggingMetricConfig) GoogleLoggingMetric
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig">GoogleLoggingMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig">GoogleLoggingMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putBucketOptions">PutBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putMetricDescriptor">PutMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketOptions">ResetBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetLabelExtractors">ResetLabelExtractors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetMetricDescriptor">ResetMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetValueExtractor">ResetValueExtractor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBucketOptions` <a name="PutBucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putBucketOptions"></a>

```go
func PutBucketOptions(value GoogleLoggingMetricBucketOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putBucketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

---

##### `PutMetricDescriptor` <a name="PutMetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putMetricDescriptor"></a>

```go
func PutMetricDescriptor(value GoogleLoggingMetricMetricDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putMetricDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putTimeouts"></a>

```go
func PutTimeouts(value GoogleLoggingMetricTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a>

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketOptions` <a name="ResetBucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetBucketOptions"></a>

```go
func ResetBucketOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetId"></a>

```go
func ResetId()
```

##### `ResetLabelExtractors` <a name="ResetLabelExtractors" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetLabelExtractors"></a>

```go
func ResetLabelExtractors()
```

##### `ResetMetricDescriptor` <a name="ResetMetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetMetricDescriptor"></a>

```go
func ResetMetricDescriptor()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValueExtractor` <a name="ResetValueExtractor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.resetValueExtractor"></a>

```go
func ResetValueExtractor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingMetric resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.GoogleLoggingMetric_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.GoogleLoggingMetric_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.GoogleLoggingMetric_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.GoogleLoggingMetric_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleLoggingMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleLoggingMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleLoggingMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptions">BucketOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference">GoogleLoggingMetricBucketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptor">MetricDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference">GoogleLoggingMetricMetricDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference">GoogleLoggingMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptionsInput">BucketOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractorsInput">LabelExtractorsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptorInput">MetricDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractorInput">ValueExtractorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractors">LabelExtractors</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractor">ValueExtractor</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketOptions`<sup>Required</sup> <a name="BucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptions"></a>

```go
func BucketOptions() GoogleLoggingMetricBucketOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference">GoogleLoggingMetricBucketOptionsOutputReference</a>

---

##### `MetricDescriptor`<sup>Required</sup> <a name="MetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptor"></a>

```go
func MetricDescriptor() GoogleLoggingMetricMetricDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference">GoogleLoggingMetricMetricDescriptorOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeouts"></a>

```go
func Timeouts() GoogleLoggingMetricTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference">GoogleLoggingMetricTimeoutsOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketOptionsInput`<sup>Optional</sup> <a name="BucketOptionsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketOptionsInput"></a>

```go
func BucketOptionsInput() GoogleLoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelExtractorsInput`<sup>Optional</sup> <a name="LabelExtractorsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractorsInput"></a>

```go
func LabelExtractorsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetricDescriptorInput`<sup>Optional</sup> <a name="MetricDescriptorInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.metricDescriptorInput"></a>

```go
func MetricDescriptorInput() GoogleLoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueExtractorInput`<sup>Optional</sup> <a name="ValueExtractorInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractorInput"></a>

```go
func ValueExtractorInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LabelExtractors`<sup>Required</sup> <a name="LabelExtractors" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.labelExtractors"></a>

```go
func LabelExtractors() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ValueExtractor`<sup>Required</sup> <a name="ValueExtractor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.valueExtractor"></a>

```go
func ValueExtractor() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetric.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingMetricBucketOptions <a name="GoogleLoggingMetricBucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricBucketOptions {
	ExplicitBuckets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets,
	ExponentialBuckets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets,
	LinearBuckets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.explicitBuckets">ExplicitBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a></code> | explicit_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.exponentialBuckets">ExponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a></code> | exponential_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.linearBuckets">LinearBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a></code> | linear_buckets block. |

---

##### `ExplicitBuckets`<sup>Optional</sup> <a name="ExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.explicitBuckets"></a>

```go
ExplicitBuckets GoogleLoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

explicit_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#explicit_buckets GoogleLoggingMetric#explicit_buckets}

---

##### `ExponentialBuckets`<sup>Optional</sup> <a name="ExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.exponentialBuckets"></a>

```go
ExponentialBuckets GoogleLoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

exponential_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#exponential_buckets GoogleLoggingMetric#exponential_buckets}

---

##### `LinearBuckets`<sup>Optional</sup> <a name="LinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions.property.linearBuckets"></a>

```go
LinearBuckets GoogleLoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

linear_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#linear_buckets GoogleLoggingMetric#linear_buckets}

---

### GoogleLoggingMetricBucketOptionsExplicitBuckets <a name="GoogleLoggingMetricBucketOptionsExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricBucketOptionsExplicitBuckets {
	Bounds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets.property.bounds">Bounds</a></code> | <code>*[]*f64</code> | The values must be monotonically increasing. |

---

##### `Bounds`<sup>Required</sup> <a name="Bounds" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets.property.bounds"></a>

```go
Bounds *[]*f64
```

- *Type:* *[]*f64

The values must be monotonically increasing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#bounds GoogleLoggingMetric#bounds}

---

### GoogleLoggingMetricBucketOptionsExponentialBuckets <a name="GoogleLoggingMetricBucketOptionsExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricBucketOptionsExponentialBuckets {
	GrowthFactor: *f64,
	NumFiniteBuckets: *f64,
	Scale: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.growthFactor">GrowthFactor</a></code> | <code>*f64</code> | Must be greater than 1. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.scale">Scale</a></code> | <code>*f64</code> | Must be greater than 0. |

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.growthFactor"></a>

```go
GrowthFactor *f64
```

- *Type:* *f64

Must be greater than 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#growth_factor GoogleLoggingMetric#growth_factor}

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.numFiniteBuckets"></a>

```go
NumFiniteBuckets *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#num_finite_buckets GoogleLoggingMetric#num_finite_buckets}

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets.property.scale"></a>

```go
Scale *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#scale GoogleLoggingMetric#scale}

---

### GoogleLoggingMetricBucketOptionsLinearBuckets <a name="GoogleLoggingMetricBucketOptionsLinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricBucketOptionsLinearBuckets {
	NumFiniteBuckets: *f64,
	Offset: *f64,
	Width: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | Must be greater than 0. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.offset">Offset</a></code> | <code>*f64</code> | Lower bound of the first bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.width">Width</a></code> | <code>*f64</code> | Must be greater than 0. |

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.numFiniteBuckets"></a>

```go
NumFiniteBuckets *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#num_finite_buckets GoogleLoggingMetric#num_finite_buckets}

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Lower bound of the first bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#offset GoogleLoggingMetric#offset}

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets.property.width"></a>

```go
Width *f64
```

- *Type:* *f64

Must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#width GoogleLoggingMetric#width}

---

### GoogleLoggingMetricConfig <a name="GoogleLoggingMetricConfig" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Name: *string,
	BucketName: *string,
	BucketOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingMetric.GoogleLoggingMetricBucketOptions,
	Description: *string,
	Disabled: interface{},
	Id: *string,
	LabelExtractors: *map[string]*string,
	MetricDescriptor: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingMetric.GoogleLoggingMetricTimeouts,
	ValueExtractor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.filter">Filter</a></code> | <code>*string</code> | An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.name">Name</a></code> | <code>*string</code> | The client-assigned metric identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The resource name of the Log Bucket that owns the Log Metric. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketOptions">BucketOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a></code> | bucket_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.description">Description</a></code> | <code>*string</code> | A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | If set to True, then this metric is disabled and it does not generate any points. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#id GoogleLoggingMetric#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.labelExtractors">LabelExtractors</a></code> | <code>*map[string]*string</code> | A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.metricDescriptor">MetricDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a></code> | metric_descriptor block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#project GoogleLoggingMetric#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.valueExtractor">ValueExtractor</a></code> | <code>*string</code> | A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#filter GoogleLoggingMetric#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The client-assigned metric identifier.

Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#name GoogleLoggingMetric#name}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The resource name of the Log Bucket that owns the Log Metric.

Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#bucket_name GoogleLoggingMetric#bucket_name}

---

##### `BucketOptions`<sup>Optional</sup> <a name="BucketOptions" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.bucketOptions"></a>

```go
BucketOptions GoogleLoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

bucket_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#bucket_options GoogleLoggingMetric#bucket_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#description GoogleLoggingMetric#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If set to True, then this metric is disabled and it does not generate any points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#disabled GoogleLoggingMetric#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#id GoogleLoggingMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabelExtractors`<sup>Optional</sup> <a name="LabelExtractors" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.labelExtractors"></a>

```go
LabelExtractors *map[string]*string
```

- *Type:* *map[string]*string

A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.

Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#label_extractors GoogleLoggingMetric#label_extractors}

---

##### `MetricDescriptor`<sup>Optional</sup> <a name="MetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.metricDescriptor"></a>

```go
MetricDescriptor GoogleLoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

metric_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#metric_descriptor GoogleLoggingMetric#metric_descriptor}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#project GoogleLoggingMetric#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.timeouts"></a>

```go
Timeouts GoogleLoggingMetricTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts">GoogleLoggingMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#timeouts GoogleLoggingMetric#timeouts}

---

##### `ValueExtractor`<sup>Optional</sup> <a name="ValueExtractor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricConfig.property.valueExtractor"></a>

```go
ValueExtractor *string
```

- *Type:* *string

A valueExtractor is required when using a distribution logs-based metric to extract the values to record from a log entry.

Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#value_extractor GoogleLoggingMetric#value_extractor}

---

### GoogleLoggingMetricMetricDescriptor <a name="GoogleLoggingMetricMetricDescriptor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricMetricDescriptor {
	MetricKind: *string,
	ValueType: *string,
	DisplayName: *string,
	Labels: interface{},
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.metricKind">MetricKind</a></code> | <code>*string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.valueType">ValueType</a></code> | <code>*string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.displayName">DisplayName</a></code> | <code>*string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.unit">Unit</a></code> | <code>*string</code> | The unit in which the metric value is reported. |

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.metricKind"></a>

```go
MetricKind *string
```

- *Type:* *string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#metric_kind GoogleLoggingMetric#metric_kind}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#value_type GoogleLoggingMetric#value_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case
without an ending period, for example "Request count". This field is optional but it is
recommended to be set for any metrics associated with user-visible concepts, such as Quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#display_name GoogleLoggingMetric#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#labels GoogleLoggingMetric#labels}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit in which the metric value is reported.

It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#unit GoogleLoggingMetric#unit}

---

### GoogleLoggingMetricMetricDescriptorLabels <a name="GoogleLoggingMetricMetricDescriptorLabels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricMetricDescriptorLabels {
	Key: *string,
	Description: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.key">Key</a></code> | <code>*string</code> | The label key. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.description">Description</a></code> | <code>*string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.valueType">ValueType</a></code> | <code>*string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#key GoogleLoggingMetric#key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#description GoogleLoggingMetric#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabels.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#value_type GoogleLoggingMetric#value_type}

---

### GoogleLoggingMetricTimeouts <a name="GoogleLoggingMetricTimeouts" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

&googleloggingmetric.GoogleLoggingMetricTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#create GoogleLoggingMetric#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#delete GoogleLoggingMetric#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#update GoogleLoggingMetric#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#create GoogleLoggingMetric#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#delete GoogleLoggingMetric#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_logging_metric#update GoogleLoggingMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference <a name="GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput">BoundsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds">Bounds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoundsInput`<sup>Optional</sup> <a name="BoundsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.boundsInput"></a>

```go
func BoundsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Bounds`<sup>Required</sup> <a name="Bounds" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.bounds"></a>

```go
func Bounds() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

---


### GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference <a name="GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput">GrowthFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput">NumFiniteBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput">ScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor">GrowthFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale">Scale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrowthFactorInput`<sup>Optional</sup> <a name="GrowthFactorInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactorInput"></a>

```go
func GrowthFactorInput() *f64
```

- *Type:* *f64

---

##### `NumFiniteBucketsInput`<sup>Optional</sup> <a name="NumFiniteBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBucketsInput"></a>

```go
func NumFiniteBucketsInput() *f64
```

- *Type:* *f64

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scaleInput"></a>

```go
func ScaleInput() *f64
```

- *Type:* *f64

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.growthFactor"></a>

```go
func GrowthFactor() *f64
```

- *Type:* *f64

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.numFiniteBuckets"></a>

```go
func NumFiniteBuckets() *f64
```

- *Type:* *f64

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.scale"></a>

```go
func Scale() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

---


### GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference <a name="GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricBucketOptionsLinearBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput">NumFiniteBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput">WidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets">NumFiniteBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumFiniteBucketsInput`<sup>Optional</sup> <a name="NumFiniteBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBucketsInput"></a>

```go
func NumFiniteBucketsInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.widthInput"></a>

```go
func WidthInput() *f64
```

- *Type:* *f64

---

##### `NumFiniteBuckets`<sup>Required</sup> <a name="NumFiniteBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.numFiniteBuckets"></a>

```go
func NumFiniteBuckets() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

---


### GoogleLoggingMetricBucketOptionsOutputReference <a name="GoogleLoggingMetricBucketOptionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricBucketOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingMetricBucketOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExplicitBuckets">PutExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExponentialBuckets">PutExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putLinearBuckets">PutLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExplicitBuckets">ResetExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExponentialBuckets">ResetExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetLinearBuckets">ResetLinearBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExplicitBuckets` <a name="PutExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExplicitBuckets"></a>

```go
func PutExplicitBuckets(value GoogleLoggingMetricBucketOptionsExplicitBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExplicitBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `PutExponentialBuckets` <a name="PutExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExponentialBuckets"></a>

```go
func PutExponentialBuckets(value GoogleLoggingMetricBucketOptionsExponentialBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putExponentialBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `PutLinearBuckets` <a name="PutLinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putLinearBuckets"></a>

```go
func PutLinearBuckets(value GoogleLoggingMetricBucketOptionsLinearBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.putLinearBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

---

##### `ResetExplicitBuckets` <a name="ResetExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExplicitBuckets"></a>

```go
func ResetExplicitBuckets()
```

##### `ResetExponentialBuckets` <a name="ResetExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetExponentialBuckets"></a>

```go
func ResetExponentialBuckets()
```

##### `ResetLinearBuckets` <a name="ResetLinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.resetLinearBuckets"></a>

```go
func ResetLinearBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBuckets">ExplicitBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference">GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBuckets">ExponentialBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference">GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBuckets">LinearBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference">GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput">ExplicitBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput">ExponentialBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBucketsInput">LinearBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExplicitBuckets`<sup>Required</sup> <a name="ExplicitBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBuckets"></a>

```go
func ExplicitBuckets() GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference">GoogleLoggingMetricBucketOptionsExplicitBucketsOutputReference</a>

---

##### `ExponentialBuckets`<sup>Required</sup> <a name="ExponentialBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBuckets"></a>

```go
func ExponentialBuckets() GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference">GoogleLoggingMetricBucketOptionsExponentialBucketsOutputReference</a>

---

##### `LinearBuckets`<sup>Required</sup> <a name="LinearBuckets" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBuckets"></a>

```go
func LinearBuckets() GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference">GoogleLoggingMetricBucketOptionsLinearBucketsOutputReference</a>

---

##### `ExplicitBucketsInput`<sup>Optional</sup> <a name="ExplicitBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.explicitBucketsInput"></a>

```go
func ExplicitBucketsInput() GoogleLoggingMetricBucketOptionsExplicitBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExplicitBuckets">GoogleLoggingMetricBucketOptionsExplicitBuckets</a>

---

##### `ExponentialBucketsInput`<sup>Optional</sup> <a name="ExponentialBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.exponentialBucketsInput"></a>

```go
func ExponentialBucketsInput() GoogleLoggingMetricBucketOptionsExponentialBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsExponentialBuckets">GoogleLoggingMetricBucketOptionsExponentialBuckets</a>

---

##### `LinearBucketsInput`<sup>Optional</sup> <a name="LinearBucketsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.linearBucketsInput"></a>

```go
func LinearBucketsInput() GoogleLoggingMetricBucketOptionsLinearBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsLinearBuckets">GoogleLoggingMetricBucketOptionsLinearBuckets</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingMetricBucketOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricBucketOptions">GoogleLoggingMetricBucketOptions</a>

---


### GoogleLoggingMetricMetricDescriptorLabelsList <a name="GoogleLoggingMetricMetricDescriptorLabelsList" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricMetricDescriptorLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLoggingMetricMetricDescriptorLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.get"></a>

```go
func Get(index *f64) GoogleLoggingMetricMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLoggingMetricMetricDescriptorLabelsOutputReference <a name="GoogleLoggingMetricMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricMetricDescriptorLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLoggingMetricMetricDescriptorLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLoggingMetricMetricDescriptorOutputReference <a name="GoogleLoggingMetricMetricDescriptorOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricMetricDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingMetricMetricDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList">GoogleLoggingMetricMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKindInput">MetricKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKind">MetricKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labels"></a>

```go
func Labels() GoogleLoggingMetricMetricDescriptorLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorLabelsList">GoogleLoggingMetricMetricDescriptorLabelsList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricKindInput`<sup>Optional</sup> <a name="MetricKindInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKindInput"></a>

```go
func MetricKindInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.metricKind"></a>

```go
func MetricKind() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingMetricMetricDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricMetricDescriptor">GoogleLoggingMetricMetricDescriptor</a>

---


### GoogleLoggingMetricTimeoutsOutputReference <a name="GoogleLoggingMetricTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingmetric"

googleloggingmetric.NewGoogleLoggingMetricTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingMetricTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingMetric.GoogleLoggingMetricTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



