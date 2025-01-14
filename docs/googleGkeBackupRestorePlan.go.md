# `googleGkeBackupRestorePlan` Submodule <a name="`googleGkeBackupRestorePlan` Submodule" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupRestorePlan <a name="GoogleGkeBackupRestorePlan" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan google_gke_backup_restore_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlan(scope Construct, id *string, config GoogleGkeBackupRestorePlanConfig) GoogleGkeBackupRestorePlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig">GoogleGkeBackupRestorePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig">GoogleGkeBackupRestorePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig">PutRestoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestoreConfig` <a name="PutRestoreConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig"></a>

```go
func PutRestoreConfig(value GoogleGkeBackupRestorePlanRestoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeBackupRestorePlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeBackupRestorePlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.GoogleGkeBackupRestorePlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.GoogleGkeBackupRestorePlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.GoogleGkeBackupRestorePlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.GoogleGkeBackupRestorePlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGkeBackupRestorePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGkeBackupRestorePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGkeBackupRestorePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeBackupRestorePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfig">RestoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference">GoogleGkeBackupRestorePlanRestoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference">GoogleGkeBackupRestorePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlanInput">BackupPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfigInput">RestoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RestoreConfig`<sup>Required</sup> <a name="RestoreConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfig"></a>

```go
func RestoreConfig() GoogleGkeBackupRestorePlanRestoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference">GoogleGkeBackupRestorePlanRestoreConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeouts"></a>

```go
func Timeouts() GoogleGkeBackupRestorePlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference">GoogleGkeBackupRestorePlanTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlanInput"></a>

```go
func BackupPlanInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestoreConfigInput`<sup>Optional</sup> <a name="RestoreConfigInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfigInput"></a>

```go
func RestoreConfigInput() GoogleGkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupRestorePlanConfig <a name="GoogleGkeBackupRestorePlanConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPlan: *string,
	Cluster: *string,
	Location: *string,
	Name: *string,
	RestoreConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The source cluster from which Restores will be created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.location">Location</a></code> | <code>*string</code> | The region of the Restore Plan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.name">Name</a></code> | <code>*string</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.restoreConfig">RestoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a></code> | restore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.description">Description</a></code> | <code>*string</code> | User specified descriptive string for this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#id GoogleGkeBackupRestorePlan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#project GoogleGkeBackupRestorePlan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.backupPlan"></a>

```go
BackupPlan *string
```

- *Type:* *string

A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#backup_plan GoogleGkeBackupRestorePlan#backup_plan}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The source cluster from which Restores will be created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#cluster GoogleGkeBackupRestorePlan#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the Restore Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#location GoogleGkeBackupRestorePlan#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#name GoogleGkeBackupRestorePlan#name}

---

##### `RestoreConfig`<sup>Required</sup> <a name="RestoreConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.restoreConfig"></a>

```go
RestoreConfig GoogleGkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

restore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#restore_config GoogleGkeBackupRestorePlan#restore_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User specified descriptive string for this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#description GoogleGkeBackupRestorePlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#id GoogleGkeBackupRestorePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#labels GoogleGkeBackupRestorePlan#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#project GoogleGkeBackupRestorePlan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeBackupRestorePlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#timeouts GoogleGkeBackupRestorePlan#timeouts}

---

### GoogleGkeBackupRestorePlanRestoreConfig <a name="GoogleGkeBackupRestorePlanRestoreConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfig {
	AllNamespaces: interface{},
	ClusterResourceConflictPolicy: *string,
	ClusterResourceRestoreScope: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope,
	ExcludedNamespaces: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces,
	NamespacedResourceRestoreMode: *string,
	NoNamespaces: interface{},
	RestoreOrder: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder,
	SelectedApplications: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications,
	SelectedNamespaces: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces,
	TransformationRules: interface{},
	VolumeDataRestorePolicy: *string,
	VolumeDataRestorePolicyBindings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.allNamespaces">AllNamespaces</a></code> | <code>interface{}</code> | If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy">ClusterResourceConflictPolicy</a></code> | <code>*string</code> | Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope">ClusterResourceRestoreScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | cluster_resource_restore_scope block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | excluded_namespaces block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode">NamespacedResourceRestoreMode</a></code> | <code>*string</code> | Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.noNamespaces">NoNamespaces</a></code> | <code>interface{}</code> | Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.restoreOrder">RestoreOrder</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | restore_order block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | selected_namespaces block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.transformationRules">TransformationRules</a></code> | <code>interface{}</code> | transformation_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy">VolumeDataRestorePolicy</a></code> | <code>*string</code> | Specifies the mechanism to be used to restore volume data. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicyBindings">VolumeDataRestorePolicyBindings</a></code> | <code>interface{}</code> | volume_data_restore_policy_bindings block. |

---

##### `AllNamespaces`<sup>Optional</sup> <a name="AllNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.allNamespaces"></a>

```go
AllNamespaces interface{}
```

- *Type:* interface{}

If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#all_namespaces GoogleGkeBackupRestorePlan#all_namespaces}

---

##### `ClusterResourceConflictPolicy`<sup>Optional</sup> <a name="ClusterResourceConflictPolicy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy"></a>

```go
ClusterResourceConflictPolicy *string
```

- *Type:* *string

Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster.

This MUST be set to a value other than 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
if 'clusterResourceRestoreScope' is anyting other than 'noGroupKinds'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
for more information on each policy option. Possible values: ["USE_EXISTING_VERSION", "USE_BACKUP_VERSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#cluster_resource_conflict_policy GoogleGkeBackupRestorePlan#cluster_resource_conflict_policy}

---

##### `ClusterResourceRestoreScope`<sup>Optional</sup> <a name="ClusterResourceRestoreScope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope"></a>

```go
ClusterResourceRestoreScope GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

cluster_resource_restore_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#cluster_resource_restore_scope GoogleGkeBackupRestorePlan#cluster_resource_restore_scope}

---

##### `ExcludedNamespaces`<sup>Optional</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.excludedNamespaces"></a>

```go
ExcludedNamespaces GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

excluded_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#excluded_namespaces GoogleGkeBackupRestorePlan#excluded_namespaces}

---

##### `NamespacedResourceRestoreMode`<sup>Optional</sup> <a name="NamespacedResourceRestoreMode" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode"></a>

```go
NamespacedResourceRestoreMode *string
```

- *Type:* *string

Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.

This MUST be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
for more information on each mode. Possible values: ["DELETE_AND_RESTORE", "FAIL_ON_CONFLICT", "MERGE_SKIP_ON_CONFLICT", "MERGE_REPLACE_VOLUME_ON_CONFLICT", "MERGE_REPLACE_ON_CONFLICT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#namespaced_resource_restore_mode GoogleGkeBackupRestorePlan#namespaced_resource_restore_mode}

---

##### `NoNamespaces`<sup>Optional</sup> <a name="NoNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.noNamespaces"></a>

```go
NoNamespaces interface{}
```

- *Type:* interface{}

Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#no_namespaces GoogleGkeBackupRestorePlan#no_namespaces}

---

##### `RestoreOrder`<sup>Optional</sup> <a name="RestoreOrder" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.restoreOrder"></a>

```go
RestoreOrder GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

restore_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#restore_order GoogleGkeBackupRestorePlan#restore_order}

---

##### `SelectedApplications`<sup>Optional</sup> <a name="SelectedApplications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedApplications"></a>

```go
SelectedApplications GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#selected_applications GoogleGkeBackupRestorePlan#selected_applications}

---

##### `SelectedNamespaces`<sup>Optional</sup> <a name="SelectedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedNamespaces"></a>

```go
SelectedNamespaces GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#selected_namespaces GoogleGkeBackupRestorePlan#selected_namespaces}

---

##### `TransformationRules`<sup>Optional</sup> <a name="TransformationRules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.transformationRules"></a>

```go
TransformationRules interface{}
```

- *Type:* interface{}

transformation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#transformation_rules GoogleGkeBackupRestorePlan#transformation_rules}

---

##### `VolumeDataRestorePolicy`<sup>Optional</sup> <a name="VolumeDataRestorePolicy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy"></a>

```go
VolumeDataRestorePolicy *string
```

- *Type:* *string

Specifies the mechanism to be used to restore volume data.

This should be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
If not specified, it will be treated as 'NO_VOLUME_DATA_RESTORATION'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#volume_data_restore_policy GoogleGkeBackupRestorePlan#volume_data_restore_policy}

---

##### `VolumeDataRestorePolicyBindings`<sup>Optional</sup> <a name="VolumeDataRestorePolicyBindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicyBindings"></a>

```go
VolumeDataRestorePolicyBindings interface{}
```

- *Type:* interface{}

volume_data_restore_policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#volume_data_restore_policy_bindings GoogleGkeBackupRestorePlan#volume_data_restore_policy_bindings}

---

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope {
	AllGroupKinds: interface{},
	ExcludedGroupKinds: interface{},
	NoGroupKinds: interface{},
	SelectedGroupKinds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds">AllGroupKinds</a></code> | <code>interface{}</code> | If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds">ExcludedGroupKinds</a></code> | <code>interface{}</code> | excluded_group_kinds block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds">NoGroupKinds</a></code> | <code>interface{}</code> | If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds">SelectedGroupKinds</a></code> | <code>interface{}</code> | selected_group_kinds block. |

---

##### `AllGroupKinds`<sup>Optional</sup> <a name="AllGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds"></a>

```go
AllGroupKinds interface{}
```

- *Type:* interface{}

If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#all_group_kinds GoogleGkeBackupRestorePlan#all_group_kinds}

---

##### `ExcludedGroupKinds`<sup>Optional</sup> <a name="ExcludedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds"></a>

```go
ExcludedGroupKinds interface{}
```

- *Type:* interface{}

excluded_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#excluded_group_kinds GoogleGkeBackupRestorePlan#excluded_group_kinds}

---

##### `NoGroupKinds`<sup>Optional</sup> <a name="NoGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds"></a>

```go
NoGroupKinds interface{}
```

- *Type:* interface{}

If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#no_group_kinds GoogleGkeBackupRestorePlan#no_group_kinds}

---

##### `SelectedGroupKinds`<sup>Optional</sup> <a name="SelectedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds"></a>

```go
SelectedGroupKinds interface{}
```

- *Type:* interface{}

selected_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#selected_group_kinds GoogleGkeBackupRestorePlan#selected_group_kinds}

---

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces <a name="GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces {
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | A list of Kubernetes Namespaces. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder {
	GroupKindDependencies: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder.property.groupKindDependencies">GroupKindDependencies</a></code> | <code>interface{}</code> | group_kind_dependencies block. |

---

##### `GroupKindDependencies`<sup>Required</sup> <a name="GroupKindDependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder.property.groupKindDependencies"></a>

```go
GroupKindDependencies interface{}
```

- *Type:* interface{}

group_kind_dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#group_kind_dependencies GoogleGkeBackupRestorePlan#group_kind_dependencies}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies {
	Requiring: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring,
	Satisfying: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.requiring">Requiring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | requiring block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.satisfying">Satisfying</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | satisfying block. |

---

##### `Requiring`<sup>Required</sup> <a name="Requiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.requiring"></a>

```go
Requiring GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

requiring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#requiring GoogleGkeBackupRestorePlan#requiring}

---

##### `Satisfying`<sup>Required</sup> <a name="Satisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.satisfying"></a>

```go
Satisfying GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

satisfying block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#satisfying GoogleGkeBackupRestorePlan#satisfying}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications {
	NamespacedNames: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames">NamespacedNames</a></code> | <code>interface{}</code> | namespaced_names block. |

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames"></a>

```go
NamespacedNames interface{}
```

- *Type:* interface{}

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#namespaced_names GoogleGkeBackupRestorePlan#namespaced_names}

---

### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames {
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name">Name</a></code> | <code>*string</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace of a Kubernetes Resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#name GoogleGkeBackupRestorePlan#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#namespace GoogleGkeBackupRestorePlan#namespace}

---

### GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces {
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | A list of Kubernetes Namespaces. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRules <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules {
	FieldActions: interface{},
	Description: *string,
	ResourceFilter: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions">FieldActions</a></code> | <code>interface{}</code> | field_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.description">Description</a></code> | <code>*string</code> | The description is a user specified string description of the transformation rule. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | resource_filter block. |

---

##### `FieldActions`<sup>Required</sup> <a name="FieldActions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions"></a>

```go
FieldActions interface{}
```

- *Type:* interface{}

field_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#field_actions GoogleGkeBackupRestorePlan#field_actions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description is a user specified string description of the transformation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#description GoogleGkeBackupRestorePlan#description}

---

##### `ResourceFilter`<sup>Optional</sup> <a name="ResourceFilter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter"></a>

```go
ResourceFilter GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_filter GoogleGkeBackupRestorePlan#resource_filter}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions {
	Op: *string,
	FromPath: *string,
	Path: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op">Op</a></code> | <code>*string</code> | Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath">FromPath</a></code> | <code>*string</code> | A string containing a JSON Pointer value that references the location in the target document to move the value from. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path">Path</a></code> | <code>*string</code> | A string containing a JSON-Pointer value that references a location within the target document where the operation is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value">Value</a></code> | <code>*string</code> | A string that specifies the desired value in string format to use for transformation. |

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op"></a>

```go
Op *string
```

- *Type:* *string

Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#op GoogleGkeBackupRestorePlan#op}

---

##### `FromPath`<sup>Optional</sup> <a name="FromPath" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath"></a>

```go
FromPath *string
```

- *Type:* *string

A string containing a JSON Pointer value that references the location in the target document to move the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#from_path GoogleGkeBackupRestorePlan#from_path}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path"></a>

```go
Path *string
```

- *Type:* *string

A string containing a JSON-Pointer value that references a location within the target document where the operation is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#path GoogleGkeBackupRestorePlan#path}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value"></a>

```go
Value *string
```

- *Type:* *string

A string that specifies the desired value in string format to use for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#value GoogleGkeBackupRestorePlan#value}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter {
	GroupKinds: interface{},
	JsonPath: *string,
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds">GroupKinds</a></code> | <code>interface{}</code> | group_kinds block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath">JsonPath</a></code> | <code>*string</code> | This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | (Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup. |

---

##### `GroupKinds`<sup>Optional</sup> <a name="GroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds"></a>

```go
GroupKinds interface{}
```

- *Type:* interface{}

group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#group_kinds GoogleGkeBackupRestorePlan#group_kinds}

---

##### `JsonPath`<sup>Optional</sup> <a name="JsonPath" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath"></a>

```go
JsonPath *string
```

- *Type:* *string

This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#json_path GoogleGkeBackupRestorePlan#json_path}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

(Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup.

If this field is not provided, no namespace filtering will
be performed (all resources in all Namespaces, including all
cluster-scoped resources, will be candidates for transformation).
To mix cluster-scoped and namespaced resources in the same rule,
use an empty string ("") as one of the target namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings <a name="GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings {
	Policy: *string,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.policy">Policy</a></code> | <code>*string</code> | Specifies the mechanism to be used to restore this volume data. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.volumeType">VolumeType</a></code> | <code>*string</code> | The volume type, as determined by the PVC's bound PV, to apply the policy to. Possible values: ["GCE_PERSISTENT_DISK"]. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Specifies the mechanism to be used to restore this volume data.

See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#policy GoogleGkeBackupRestorePlan#policy}

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The volume type, as determined by the PVC's bound PV, to apply the policy to. Possible values: ["GCE_PERSISTENT_DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#volume_type GoogleGkeBackupRestorePlan#volume_type}

---

### GoogleGkeBackupRestorePlanTimeouts <a name="GoogleGkeBackupRestorePlanTimeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

&googlegkebackuprestoreplan.GoogleGkeBackupRestorePlanTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#create GoogleGkeBackupRestorePlan#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#delete GoogleGkeBackupRestorePlan#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#update GoogleGkeBackupRestorePlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#create GoogleGkeBackupRestorePlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#delete GoogleGkeBackupRestorePlan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_backup_restore_plan#update GoogleGkeBackupRestorePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds">PutExcludedGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds">PutSelectedGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds">ResetAllGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds">ResetExcludedGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds">ResetNoGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds">ResetSelectedGroupKinds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedGroupKinds` <a name="PutExcludedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds"></a>

```go
func PutExcludedGroupKinds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSelectedGroupKinds` <a name="PutSelectedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds"></a>

```go
func PutSelectedGroupKinds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllGroupKinds` <a name="ResetAllGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds"></a>

```go
func ResetAllGroupKinds()
```

##### `ResetExcludedGroupKinds` <a name="ResetExcludedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds"></a>

```go
func ResetExcludedGroupKinds()
```

##### `ResetNoGroupKinds` <a name="ResetNoGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds"></a>

```go
func ResetNoGroupKinds()
```

##### `ResetSelectedGroupKinds` <a name="ResetSelectedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds"></a>

```go
func ResetSelectedGroupKinds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds">ExcludedGroupKinds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds">SelectedGroupKinds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput">AllGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput">ExcludedGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput">NoGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput">SelectedGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds">AllGroupKinds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds">NoGroupKinds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedGroupKinds`<sup>Required</sup> <a name="ExcludedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds"></a>

```go
func ExcludedGroupKinds() GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a>

---

##### `SelectedGroupKinds`<sup>Required</sup> <a name="SelectedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds"></a>

```go
func SelectedGroupKinds() GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a>

---

##### `AllGroupKindsInput`<sup>Optional</sup> <a name="AllGroupKindsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput"></a>

```go
func AllGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedGroupKindsInput`<sup>Optional</sup> <a name="ExcludedGroupKindsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput"></a>

```go
func ExcludedGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `NoGroupKindsInput`<sup>Optional</sup> <a name="NoGroupKindsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput"></a>

```go
func NoGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `SelectedGroupKindsInput`<sup>Optional</sup> <a name="SelectedGroupKindsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput"></a>

```go
func SelectedGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `AllGroupKinds`<sup>Required</sup> <a name="AllGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds"></a>

```go
func AllGroupKinds() interface{}
```

- *Type:* interface{}

---

##### `NoGroupKinds`<sup>Required</sup> <a name="NoGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds"></a>

```go
func NoGroupKinds() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope">PutClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces">PutExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder">PutRestoreOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications">PutSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces">PutSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules">PutTransformationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings">PutVolumeDataRestorePolicyBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces">ResetAllNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy">ResetClusterResourceConflictPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope">ResetClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces">ResetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode">ResetNamespacedResourceRestoreMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces">ResetNoNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetRestoreOrder">ResetRestoreOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications">ResetSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces">ResetSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules">ResetTransformationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy">ResetVolumeDataRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicyBindings">ResetVolumeDataRestorePolicyBindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterResourceRestoreScope` <a name="PutClusterResourceRestoreScope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope"></a>

```go
func PutClusterResourceRestoreScope(value GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---

##### `PutExcludedNamespaces` <a name="PutExcludedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces"></a>

```go
func PutExcludedNamespaces(value GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---

##### `PutRestoreOrder` <a name="PutRestoreOrder" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder"></a>

```go
func PutRestoreOrder(value GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---

##### `PutSelectedApplications` <a name="PutSelectedApplications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications"></a>

```go
func PutSelectedApplications(value GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---

##### `PutSelectedNamespaces` <a name="PutSelectedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces"></a>

```go
func PutSelectedNamespaces(value GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---

##### `PutTransformationRules` <a name="PutTransformationRules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules"></a>

```go
func PutTransformationRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumeDataRestorePolicyBindings` <a name="PutVolumeDataRestorePolicyBindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings"></a>

```go
func PutVolumeDataRestorePolicyBindings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllNamespaces` <a name="ResetAllNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces"></a>

```go
func ResetAllNamespaces()
```

##### `ResetClusterResourceConflictPolicy` <a name="ResetClusterResourceConflictPolicy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy"></a>

```go
func ResetClusterResourceConflictPolicy()
```

##### `ResetClusterResourceRestoreScope` <a name="ResetClusterResourceRestoreScope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope"></a>

```go
func ResetClusterResourceRestoreScope()
```

##### `ResetExcludedNamespaces` <a name="ResetExcludedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces"></a>

```go
func ResetExcludedNamespaces()
```

##### `ResetNamespacedResourceRestoreMode` <a name="ResetNamespacedResourceRestoreMode" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode"></a>

```go
func ResetNamespacedResourceRestoreMode()
```

##### `ResetNoNamespaces` <a name="ResetNoNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces"></a>

```go
func ResetNoNamespaces()
```

##### `ResetRestoreOrder` <a name="ResetRestoreOrder" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetRestoreOrder"></a>

```go
func ResetRestoreOrder()
```

##### `ResetSelectedApplications` <a name="ResetSelectedApplications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications"></a>

```go
func ResetSelectedApplications()
```

##### `ResetSelectedNamespaces` <a name="ResetSelectedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces"></a>

```go
func ResetSelectedNamespaces()
```

##### `ResetTransformationRules` <a name="ResetTransformationRules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules"></a>

```go
func ResetTransformationRules()
```

##### `ResetVolumeDataRestorePolicy` <a name="ResetVolumeDataRestorePolicy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy"></a>

```go
func ResetVolumeDataRestorePolicy()
```

##### `ResetVolumeDataRestorePolicyBindings` <a name="ResetVolumeDataRestorePolicyBindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicyBindings"></a>

```go
func ResetVolumeDataRestorePolicyBindings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope">ClusterResourceRestoreScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrder">RestoreOrder</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules">TransformationRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindings">VolumeDataRestorePolicyBindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput">AllNamespacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput">ClusterResourceConflictPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput">ClusterResourceRestoreScopeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput">ExcludedNamespacesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput">NamespacedResourceRestoreModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput">NoNamespacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrderInput">RestoreOrderInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput">SelectedApplicationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput">SelectedNamespacesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput">TransformationRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindingsInput">VolumeDataRestorePolicyBindingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput">VolumeDataRestorePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces">AllNamespaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy">ClusterResourceConflictPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode">NamespacedResourceRestoreMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces">NoNamespaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy">VolumeDataRestorePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterResourceRestoreScope`<sup>Required</sup> <a name="ClusterResourceRestoreScope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope"></a>

```go
func ClusterResourceRestoreScope() GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a>

---

##### `ExcludedNamespaces`<sup>Required</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces"></a>

```go
func ExcludedNamespaces() GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a>

---

##### `RestoreOrder`<sup>Required</sup> <a name="RestoreOrder" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrder"></a>

```go
func RestoreOrder() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference</a>

---

##### `SelectedApplications`<sup>Required</sup> <a name="SelectedApplications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications"></a>

```go
func SelectedApplications() GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a>

---

##### `SelectedNamespaces`<sup>Required</sup> <a name="SelectedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces"></a>

```go
func SelectedNamespaces() GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a>

---

##### `TransformationRules`<sup>Required</sup> <a name="TransformationRules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules"></a>

```go
func TransformationRules() GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList</a>

---

##### `VolumeDataRestorePolicyBindings`<sup>Required</sup> <a name="VolumeDataRestorePolicyBindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindings"></a>

```go
func VolumeDataRestorePolicyBindings() GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList</a>

---

##### `AllNamespacesInput`<sup>Optional</sup> <a name="AllNamespacesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput"></a>

```go
func AllNamespacesInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterResourceConflictPolicyInput`<sup>Optional</sup> <a name="ClusterResourceConflictPolicyInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput"></a>

```go
func ClusterResourceConflictPolicyInput() *string
```

- *Type:* *string

---

##### `ClusterResourceRestoreScopeInput`<sup>Optional</sup> <a name="ClusterResourceRestoreScopeInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput"></a>

```go
func ClusterResourceRestoreScopeInput() GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---

##### `ExcludedNamespacesInput`<sup>Optional</sup> <a name="ExcludedNamespacesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput"></a>

```go
func ExcludedNamespacesInput() GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---

##### `NamespacedResourceRestoreModeInput`<sup>Optional</sup> <a name="NamespacedResourceRestoreModeInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput"></a>

```go
func NamespacedResourceRestoreModeInput() *string
```

- *Type:* *string

---

##### `NoNamespacesInput`<sup>Optional</sup> <a name="NoNamespacesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput"></a>

```go
func NoNamespacesInput() interface{}
```

- *Type:* interface{}

---

##### `RestoreOrderInput`<sup>Optional</sup> <a name="RestoreOrderInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrderInput"></a>

```go
func RestoreOrderInput() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---

##### `SelectedApplicationsInput`<sup>Optional</sup> <a name="SelectedApplicationsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput"></a>

```go
func SelectedApplicationsInput() GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---

##### `SelectedNamespacesInput`<sup>Optional</sup> <a name="SelectedNamespacesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput"></a>

```go
func SelectedNamespacesInput() GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---

##### `TransformationRulesInput`<sup>Optional</sup> <a name="TransformationRulesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput"></a>

```go
func TransformationRulesInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeDataRestorePolicyBindingsInput`<sup>Optional</sup> <a name="VolumeDataRestorePolicyBindingsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindingsInput"></a>

```go
func VolumeDataRestorePolicyBindingsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeDataRestorePolicyInput`<sup>Optional</sup> <a name="VolumeDataRestorePolicyInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput"></a>

```go
func VolumeDataRestorePolicyInput() *string
```

- *Type:* *string

---

##### `AllNamespaces`<sup>Required</sup> <a name="AllNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces"></a>

```go
func AllNamespaces() interface{}
```

- *Type:* interface{}

---

##### `ClusterResourceConflictPolicy`<sup>Required</sup> <a name="ClusterResourceConflictPolicy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy"></a>

```go
func ClusterResourceConflictPolicy() *string
```

- *Type:* *string

---

##### `NamespacedResourceRestoreMode`<sup>Required</sup> <a name="NamespacedResourceRestoreMode" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode"></a>

```go
func NamespacedResourceRestoreMode() *string
```

- *Type:* *string

---

##### `NoNamespaces`<sup>Required</sup> <a name="NoNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces"></a>

```go
func NoNamespaces() interface{}
```

- *Type:* interface{}

---

##### `VolumeDataRestorePolicy`<sup>Required</sup> <a name="VolumeDataRestorePolicy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy"></a>

```go
func VolumeDataRestorePolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring">PutRequiring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying">PutSatisfying</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiring` <a name="PutRequiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring"></a>

```go
func PutRequiring(value GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---

##### `PutSatisfying` <a name="PutSatisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying"></a>

```go
func PutSatisfying(value GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiring">Requiring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfying">Satisfying</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiringInput">RequiringInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfyingInput">SatisfyingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Requiring`<sup>Required</sup> <a name="Requiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiring"></a>

```go
func Requiring() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference</a>

---

##### `Satisfying`<sup>Required</sup> <a name="Satisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfying"></a>

```go
func Satisfying() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference</a>

---

##### `RequiringInput`<sup>Optional</sup> <a name="RequiringInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiringInput"></a>

```go
func RequiringInput() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---

##### `SatisfyingInput`<sup>Optional</sup> <a name="SatisfyingInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfyingInput"></a>

```go
func SatisfyingInput() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies">PutGroupKindDependencies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupKindDependencies` <a name="PutGroupKindDependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies"></a>

```go
func PutGroupKindDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependencies">GroupKindDependencies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependenciesInput">GroupKindDependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupKindDependencies`<sup>Required</sup> <a name="GroupKindDependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependencies"></a>

```go
func GroupKindDependencies() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList</a>

---

##### `GroupKindDependenciesInput`<sup>Optional</sup> <a name="GroupKindDependenciesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependenciesInput"></a>

```go
func GroupKindDependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames">PutNamespacedNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespacedNames` <a name="PutNamespacedNames" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```go
func PutNamespacedNames(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames">NamespacedNames</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">NamespacedNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```go
func NamespacedNames() GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `NamespacedNamesInput`<sup>Optional</sup> <a name="NamespacedNamesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```go
func NamespacedNamesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath">ResetFromPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPath` <a name="ResetFromPath" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath"></a>

```go
func ResetFromPath()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput">FromPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput">OpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath">FromPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op">Op</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPathInput`<sup>Optional</sup> <a name="FromPathInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput"></a>

```go
func FromPathInput() *string
```

- *Type:* *string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput"></a>

```go
func OpInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FromPath`<sup>Required</sup> <a name="FromPath" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath"></a>

```go
func FromPath() *string
```

- *Type:* *string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op"></a>

```go
func Op() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions">PutFieldActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter">PutResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter">ResetResourceFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldActions` <a name="PutFieldActions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions"></a>

```go
func PutFieldActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceFilter` <a name="PutResourceFilter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter"></a>

```go
func PutResourceFilter(value GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResourceFilter` <a name="ResetResourceFilter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter"></a>

```go
func ResetResourceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions">FieldActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput">FieldActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput">ResourceFilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldActions`<sup>Required</sup> <a name="FieldActions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions"></a>

```go
func FieldActions() GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a>

---

##### `ResourceFilter`<sup>Required</sup> <a name="ResourceFilter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter"></a>

```go
func ResourceFilter() GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FieldActionsInput`<sup>Optional</sup> <a name="FieldActionsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput"></a>

```go
func FieldActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceFilterInput`<sup>Optional</sup> <a name="ResourceFilterInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput"></a>

```go
func ResourceFilterInput() GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds">PutGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds">ResetGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath">ResetJsonPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces">ResetNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupKinds` <a name="PutGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds"></a>

```go
func PutGroupKinds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGroupKinds` <a name="ResetGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds"></a>

```go
func ResetGroupKinds()
```

##### `ResetJsonPath` <a name="ResetJsonPath" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath"></a>

```go
func ResetJsonPath()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces"></a>

```go
func ResetNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds">GroupKinds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput">GroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath">JsonPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupKinds`<sup>Required</sup> <a name="GroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds"></a>

```go
func GroupKinds() GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a>

---

##### `GroupKindsInput`<sup>Optional</sup> <a name="GroupKindsInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput"></a>

```go
func GroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput"></a>

```go
func JsonPathInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath"></a>

```go
func JsonPath() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList <a name="GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get"></a>

```go
func Get(index *f64) GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeBackupRestorePlanTimeoutsOutputReference <a name="GoogleGkeBackupRestorePlanTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkebackuprestoreplan"

googlegkebackuprestoreplan.NewGoogleGkeBackupRestorePlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestorePlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



