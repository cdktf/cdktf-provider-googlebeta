# `googleBigqueryDatasetAccess` Submodule <a name="`googleBigqueryDatasetAccess` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDatasetAccessA <a name="GoogleBigqueryDatasetAccessA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access google_bigquery_dataset_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.NewGoogleBigqueryDatasetAccessA(scope Construct, id *string, config GoogleBigqueryDatasetAccessAConfig) GoogleBigqueryDatasetAccessA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig">GoogleBigqueryDatasetAccessAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig">GoogleBigqueryDatasetAccessAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine">PutRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetGroupByEmail">ResetGroupByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetIamMember">ResetIamMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRoutine">ResetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetSpecialGroup">ResetSpecialGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetUserByEmail">ResetUserByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putDataset"></a>

```go
func PutDataset(value GoogleBigqueryDatasetAccessDatasetA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

---

##### `PutRoutine` <a name="PutRoutine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine"></a>

```go
func PutRoutine(value GoogleBigqueryDatasetAccessRoutineA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryDatasetAccessTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView"></a>

```go
func PutView(value GoogleBigqueryDatasetAccessViewA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetGroupByEmail` <a name="ResetGroupByEmail" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetGroupByEmail"></a>

```go
func ResetGroupByEmail()
```

##### `ResetIamMember` <a name="ResetIamMember" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetIamMember"></a>

```go
func ResetIamMember()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRole"></a>

```go
func ResetRole()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRoutine"></a>

```go
func ResetRoutine()
```

##### `ResetSpecialGroup` <a name="ResetSpecialGroup" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetSpecialGroup"></a>

```go
func ResetSpecialGroup()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserByEmail` <a name="ResetUserByEmail" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetUserByEmail"></a>

```go
func ResetUserByEmail()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryDatasetAccessA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryDatasetAccessA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDatasetAccessA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.apiUpdatedMember">ApiUpdatedMember</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routine">Routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference">GoogleBigqueryDatasetAccessRoutineAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference">GoogleBigqueryDatasetAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.view">View</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference">GoogleBigqueryDatasetAccessViewAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmailInput">GroupByEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMemberInput">IamMemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routineInput">RoutineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroupInput">SpecialGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmailInput">UserByEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.viewInput">ViewInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmail">GroupByEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMember">IamMember</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroup">SpecialGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmail">UserByEmail</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiUpdatedMember`<sup>Required</sup> <a name="ApiUpdatedMember" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.apiUpdatedMember"></a>

```go
func ApiUpdatedMember() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dataset"></a>

```go
func Dataset() GoogleBigqueryDatasetAccessDatasetAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetAOutputReference</a>

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routine"></a>

```go
func Routine() GoogleBigqueryDatasetAccessRoutineAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference">GoogleBigqueryDatasetAccessRoutineAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryDatasetAccessTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference">GoogleBigqueryDatasetAccessTimeoutsOutputReference</a>

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.view"></a>

```go
func View() GoogleBigqueryDatasetAccessViewAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference">GoogleBigqueryDatasetAccessViewAOutputReference</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetInput"></a>

```go
func DatasetInput() GoogleBigqueryDatasetAccessDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `GroupByEmailInput`<sup>Optional</sup> <a name="GroupByEmailInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmailInput"></a>

```go
func GroupByEmailInput() *string
```

- *Type:* *string

---

##### `IamMemberInput`<sup>Optional</sup> <a name="IamMemberInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMemberInput"></a>

```go
func IamMemberInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routineInput"></a>

```go
func RoutineInput() GoogleBigqueryDatasetAccessRoutineA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

---

##### `SpecialGroupInput`<sup>Optional</sup> <a name="SpecialGroupInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroupInput"></a>

```go
func SpecialGroupInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserByEmailInput`<sup>Optional</sup> <a name="UserByEmailInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmailInput"></a>

```go
func UserByEmailInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.viewInput"></a>

```go
func ViewInput() GoogleBigqueryDatasetAccessViewA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `GroupByEmail`<sup>Required</sup> <a name="GroupByEmail" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmail"></a>

```go
func GroupByEmail() *string
```

- *Type:* *string

---

##### `IamMember`<sup>Required</sup> <a name="IamMember" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMember"></a>

```go
func IamMember() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SpecialGroup`<sup>Required</sup> <a name="SpecialGroup" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroup"></a>

```go
func SpecialGroup() *string
```

- *Type:* *string

---

##### `UserByEmail`<sup>Required</sup> <a name="UserByEmail" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmail"></a>

```go
func UserByEmail() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatasetAccessAConfig <a name="GoogleBigqueryDatasetAccessAConfig" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

&googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetId: *string,
	Dataset: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA,
	Domain: *string,
	GroupByEmail: *string,
	IamMember: *string,
	Id: *string,
	Project: *string,
	Role: *string,
	Routine: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA,
	SpecialGroup: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts,
	UserByEmail: *string,
	View: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.domain">Domain</a></code> | <code>*string</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.groupByEmail">GroupByEmail</a></code> | <code>*string</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.iamMember">IamMember</a></code> | <code>*string</code> | Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#id GoogleBigqueryDatasetAccessA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#project GoogleBigqueryDatasetAccessA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.role">Role</a></code> | <code>*string</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.routine">Routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.specialGroup">SpecialGroup</a></code> | <code>*string</code> | A special group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.userByEmail">UserByEmail</a></code> | <code>*string</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.view">View</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a></code> | view block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dataset"></a>

```go
Dataset GoogleBigqueryDatasetAccessDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#domain GoogleBigqueryDatasetAccessA#domain}

---

##### `GroupByEmail`<sup>Optional</sup> <a name="GroupByEmail" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.groupByEmail"></a>

```go
GroupByEmail *string
```

- *Type:* *string

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#group_by_email GoogleBigqueryDatasetAccessA#group_by_email}

---

##### `IamMember`<sup>Optional</sup> <a name="IamMember" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.iamMember"></a>

```go
IamMember *string
```

- *Type:* *string

Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.

For example: 'allUsers'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#iam_member GoogleBigqueryDatasetAccessA#iam_member}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#id GoogleBigqueryDatasetAccessA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#project GoogleBigqueryDatasetAccessA#project}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#role GoogleBigqueryDatasetAccessA#role}

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.routine"></a>

```go
Routine GoogleBigqueryDatasetAccessRoutineA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#routine GoogleBigqueryDatasetAccessA#routine}

---

##### `SpecialGroup`<sup>Optional</sup> <a name="SpecialGroup" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.specialGroup"></a>

```go
SpecialGroup *string
```

- *Type:* *string

A special group to grant access to.

Possible values include:

* 'projectOwners': Owners of the enclosing project.
* 'projectReaders': Readers of the enclosing project.
* 'projectWriters': Writers of the enclosing project.
* 'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#special_group GoogleBigqueryDatasetAccessA#special_group}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryDatasetAccessTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#timeouts GoogleBigqueryDatasetAccessA#timeouts}

---

##### `UserByEmail`<sup>Optional</sup> <a name="UserByEmail" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.userByEmail"></a>

```go
UserByEmail *string
```

- *Type:* *string

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#user_by_email GoogleBigqueryDatasetAccessA#user_by_email}

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.view"></a>

```go
View GoogleBigqueryDatasetAccessViewA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#view GoogleBigqueryDatasetAccessA#view}

---

### GoogleBigqueryDatasetAccessDatasetA <a name="GoogleBigqueryDatasetAccessDatasetA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

&googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessDatasetA {
	Dataset: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA,
	TargetTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.targetTypes">TargetTypes</a></code> | <code>*[]*string</code> | Which resources in the dataset this entry applies to. |

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.dataset"></a>

```go
Dataset GoogleBigqueryDatasetAccessDatasetDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}

---

##### `TargetTypes`<sup>Required</sup> <a name="TargetTypes" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.targetTypes"></a>

```go
TargetTypes *[]*string
```

- *Type:* *[]*string

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#target_types GoogleBigqueryDatasetAccessA#target_types}

---

### GoogleBigqueryDatasetAccessDatasetDatasetA <a name="GoogleBigqueryDatasetAccessDatasetDatasetA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

&googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessDatasetDatasetA {
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

### GoogleBigqueryDatasetAccessRoutineA <a name="GoogleBigqueryDatasetAccessRoutineA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

&googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessRoutineA {
	DatasetId: *string,
	ProjectId: *string,
	RoutineId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.routineId">RoutineId</a></code> | <code>*string</code> | The ID of the routine. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.routineId"></a>

```go
RoutineId *string
```

- *Type:* *string

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#routine_id GoogleBigqueryDatasetAccessA#routine_id}

---

### GoogleBigqueryDatasetAccessTimeouts <a name="GoogleBigqueryDatasetAccessTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

&googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#create GoogleBigqueryDatasetAccessA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#delete GoogleBigqueryDatasetAccessA#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#create GoogleBigqueryDatasetAccessA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#delete GoogleBigqueryDatasetAccessA#delete}.

---

### GoogleBigqueryDatasetAccessViewA <a name="GoogleBigqueryDatasetAccessViewA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

&googlebigquerydatasetaccess.GoogleBigqueryDatasetAccessViewA {
	DatasetId: *string,
	ProjectId: *string,
	TableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.tableId">TableId</a></code> | <code>*string</code> | The ID of the table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_bigquery_dataset_access#table_id GoogleBigqueryDatasetAccessA#table_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatasetAccessDatasetAOutputReference <a name="GoogleBigqueryDatasetAccessDatasetAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.NewGoogleBigqueryDatasetAccessDatasetAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessDatasetAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.putDataset">PutDataset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.putDataset"></a>

```go
func PutDataset(value GoogleBigqueryDatasetAccessDatasetDatasetA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput">TargetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypes">TargetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.dataset"></a>

```go
func Dataset() GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.datasetInput"></a>

```go
func DatasetInput() GoogleBigqueryDatasetAccessDatasetDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

---

##### `TargetTypesInput`<sup>Optional</sup> <a name="TargetTypesInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput"></a>

```go
func TargetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetTypes`<sup>Required</sup> <a name="TargetTypes" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypes"></a>

```go
func TargetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

---


### GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference <a name="GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.NewGoogleBigqueryDatasetAccessDatasetDatasetAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessDatasetDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

---


### GoogleBigqueryDatasetAccessRoutineAOutputReference <a name="GoogleBigqueryDatasetAccessRoutineAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.NewGoogleBigqueryDatasetAccessRoutineAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessRoutineAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput">RoutineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineId">RoutineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RoutineIdInput`<sup>Optional</sup> <a name="RoutineIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput"></a>

```go
func RoutineIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineId"></a>

```go
func RoutineId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessRoutineA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

---


### GoogleBigqueryDatasetAccessTimeoutsOutputReference <a name="GoogleBigqueryDatasetAccessTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.NewGoogleBigqueryDatasetAccessTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigqueryDatasetAccessViewAOutputReference <a name="GoogleBigqueryDatasetAccessViewAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebigquerydatasetaccess"

googlebigquerydatasetaccess.NewGoogleBigqueryDatasetAccessViewAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessViewAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessViewA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

---



