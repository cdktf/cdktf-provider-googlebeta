# `googleMigrationCenterPreferenceSet` Submodule <a name="`googleMigrationCenterPreferenceSet` Submodule" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterPreferenceSet <a name="GoogleMigrationCenterPreferenceSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set google_migration_center_preference_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSet(scope Construct, id *string, config GoogleMigrationCenterPreferenceSetConfig) GoogleMigrationCenterPreferenceSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig">GoogleMigrationCenterPreferenceSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig">GoogleMigrationCenterPreferenceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences">PutVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetVirtualMachinePreferences">ResetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts"></a>

```go
func PutTimeouts(value GoogleMigrationCenterPreferenceSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

---

##### `PutVirtualMachinePreferences` <a name="PutVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences"></a>

```go
func PutVirtualMachinePreferences(value GoogleMigrationCenterPreferenceSetVirtualMachinePreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.putVirtualMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualMachinePreferences` <a name="ResetVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.resetVirtualMachinePreferences"></a>

```go
func ResetVirtualMachinePreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleMigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleMigrationCenterPreferenceSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleMigrationCenterPreferenceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterPreferenceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference">GoogleMigrationCenterPreferenceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferences">VirtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetIdInput">PreferenceSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferencesInput">VirtualMachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetId">PreferenceSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeouts"></a>

```go
func Timeouts() GoogleMigrationCenterPreferenceSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference">GoogleMigrationCenterPreferenceSetTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VirtualMachinePreferences`<sup>Required</sup> <a name="VirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferences"></a>

```go
func VirtualMachinePreferences() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PreferenceSetIdInput`<sup>Optional</sup> <a name="PreferenceSetIdInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetIdInput"></a>

```go
func PreferenceSetIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachinePreferencesInput`<sup>Optional</sup> <a name="VirtualMachinePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.virtualMachinePreferencesInput"></a>

```go
func VirtualMachinePreferencesInput() GoogleMigrationCenterPreferenceSetVirtualMachinePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PreferenceSetId`<sup>Required</sup> <a name="PreferenceSetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.preferenceSetId"></a>

```go
func PreferenceSetId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterPreferenceSetConfig <a name="GoogleMigrationCenterPreferenceSetConfig" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	PreferenceSetId: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts,
	VirtualMachinePreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.location">Location</a></code> | <code>*string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.preferenceSetId">PreferenceSetId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.description">Description</a></code> | <code>*string</code> | A description of the preference set. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.virtualMachinePreferences">VirtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | virtual_machine_preferences block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#location GoogleMigrationCenterPreferenceSet#location}

---

##### `PreferenceSetId`<sup>Required</sup> <a name="PreferenceSetId" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.preferenceSetId"></a>

```go
PreferenceSetId *string
```

- *Type:* *string

Required.

User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression '[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#preference_set_id GoogleMigrationCenterPreferenceSet#preference_set_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the preference set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#description GoogleMigrationCenterPreferenceSet#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#display_name GoogleMigrationCenterPreferenceSet#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#id GoogleMigrationCenterPreferenceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#project GoogleMigrationCenterPreferenceSet#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.timeouts"></a>

```go
Timeouts GoogleMigrationCenterPreferenceSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts">GoogleMigrationCenterPreferenceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#timeouts GoogleMigrationCenterPreferenceSet#timeouts}

---

##### `VirtualMachinePreferences`<sup>Optional</sup> <a name="VirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetConfig.property.virtualMachinePreferences"></a>

```go
VirtualMachinePreferences GoogleMigrationCenterPreferenceSetVirtualMachinePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

virtual_machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#virtual_machine_preferences GoogleMigrationCenterPreferenceSet#virtual_machine_preferences}

---

### GoogleMigrationCenterPreferenceSetTimeouts <a name="GoogleMigrationCenterPreferenceSetTimeouts" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#create GoogleMigrationCenterPreferenceSet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#delete GoogleMigrationCenterPreferenceSet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#update GoogleMigrationCenterPreferenceSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#create GoogleMigrationCenterPreferenceSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#delete GoogleMigrationCenterPreferenceSet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#update GoogleMigrationCenterPreferenceSet#update}.

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences {
	CommitmentPlan: *string,
	ComputeEnginePreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences,
	RegionPreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences,
	SizingOptimizationStrategy: *string,
	SoleTenancyPreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences,
	TargetProduct: *string,
	VmwareEnginePreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences">ComputeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | compute_engine_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences">RegionPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | region_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy">SizingOptimizationStrategy</a></code> | <code>*string</code> | Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences">SoleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | sole_tenancy_preferences block. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct">TargetProduct</a></code> | <code>*string</code> | Target product for assets using this preference set. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences">VmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | vmware_engine_preferences block. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan"></a>

```go
CommitmentPlan *string
```

- *Type:* *string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'COMMITMENT_PLAN_NONE', 'COMMITMENT_PLAN_ONE_YEAR', 'COMMITMENT_PLAN_THREE_YEARS'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `ComputeEnginePreferences`<sup>Optional</sup> <a name="ComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences"></a>

```go
ComputeEnginePreferences GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

compute_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#compute_engine_preferences GoogleMigrationCenterPreferenceSet#compute_engine_preferences}

---

##### `RegionPreferences`<sup>Optional</sup> <a name="RegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences"></a>

```go
RegionPreferences GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

region_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#region_preferences GoogleMigrationCenterPreferenceSet#region_preferences}

---

##### `SizingOptimizationStrategy`<sup>Optional</sup> <a name="SizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy"></a>

```go
SizingOptimizationStrategy *string
```

- *Type:* *string

Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine.

If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. Possible values: 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED', 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE', 'SIZING_OPTIMIZATION_STRATEGY_MODERATE', 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#sizing_optimization_strategy GoogleMigrationCenterPreferenceSet#sizing_optimization_strategy}

---

##### `SoleTenancyPreferences`<sup>Optional</sup> <a name="SoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences"></a>

```go
SoleTenancyPreferences GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

sole_tenancy_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#sole_tenancy_preferences GoogleMigrationCenterPreferenceSet#sole_tenancy_preferences}

---

##### `TargetProduct`<sup>Optional</sup> <a name="TargetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct"></a>

```go
TargetProduct *string
```

- *Type:* *string

Target product for assets using this preference set.

Specify either target product or business goal, but not both. Possible values: 'COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED', 'COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#target_product GoogleMigrationCenterPreferenceSet#target_product}

---

##### `VmwareEnginePreferences`<sup>Optional</sup> <a name="VmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences"></a>

```go
VmwareEnginePreferences GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

vmware_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#vmware_engine_preferences GoogleMigrationCenterPreferenceSet#vmware_engine_preferences}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences {
	LicenseType: *string,
	MachinePreferences: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType">LicenseType</a></code> | <code>*string</code> | License type to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences">MachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | machine_preferences block. |

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

License type to consider when calculating costs for virtual machine insights and recommendations.

If unspecified, costs are calculated based on the default licensing plan. Possible values: 'LICENSE_TYPE_UNSPECIFIED', 'LICENSE_TYPE_DEFAULT', 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#license_type GoogleMigrationCenterPreferenceSet#license_type}

---

##### `MachinePreferences`<sup>Optional</sup> <a name="MachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences"></a>

```go
MachinePreferences GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#machine_preferences GoogleMigrationCenterPreferenceSet#machine_preferences}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
	AllowedMachineSeries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries">AllowedMachineSeries</a></code> | <code>interface{}</code> | allowed_machine_series block. |

---

##### `AllowedMachineSeries`<sup>Optional</sup> <a name="AllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries"></a>

```go
AllowedMachineSeries interface{}
```

- *Type:* interface{}

allowed_machine_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#allowed_machine_series GoogleMigrationCenterPreferenceSet#allowed_machine_series}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
	Code: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code">Code</a></code> | <code>*string</code> | Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code"></a>

```go
Code *string
```

- *Type:* *string

Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#code GoogleMigrationCenterPreferenceSet#code}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences {
	PreferredRegions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions">PreferredRegions</a></code> | <code>*[]*string</code> | A list of preferred regions, ordered by the most preferred region first. |

---

##### `PreferredRegions`<sup>Optional</sup> <a name="PreferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions"></a>

```go
PreferredRegions *[]*string
```

- *Type:* *[]*string

A list of preferred regions, ordered by the most preferred region first.

Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#preferred_regions GoogleMigrationCenterPreferenceSet#preferred_regions}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences {
	CommitmentPlan: *string,
	CpuOvercommitRatio: *f64,
	HostMaintenancePolicy: *string,
	NodeTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>*f64</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy">HostMaintenancePolicy</a></code> | <code>*string</code> | Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes">NodeTypes</a></code> | <code>interface{}</code> | node_types block. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan"></a>

```go
CommitmentPlan *string
```

- *Type:* *string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR', 'COMMITMENT_3_YEAR'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `CpuOvercommitRatio`<sup>Optional</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio"></a>

```go
CpuOvercommitRatio *f64
```

- *Type:* *f64

CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#cpu_overcommit_ratio GoogleMigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `HostMaintenancePolicy`<sup>Optional</sup> <a name="HostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy"></a>

```go
HostMaintenancePolicy *string
```

- *Type:* *string

Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#host_maintenance_policy GoogleMigrationCenterPreferenceSet#host_maintenance_policy}

---

##### `NodeTypes`<sup>Optional</sup> <a name="NodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes"></a>

```go
NodeTypes interface{}
```

- *Type:* interface{}

node_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#node_types GoogleMigrationCenterPreferenceSet#node_types}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes {
	NodeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName">NodeName</a></code> | <code>*string</code> | Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes. |

---

##### `NodeName`<sup>Optional</sup> <a name="NodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName"></a>

```go
NodeName *string
```

- *Type:* *string

Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#node_name GoogleMigrationCenterPreferenceSet#node_name}

---

### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

&googlemigrationcenterpreferenceset.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences {
	CommitmentPlan: *string,
	CpuOvercommitRatio: *f64,
	MemoryOvercommitRatio: *f64,
	StorageDeduplicationCompressionRatio: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>*f64</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio">MemoryOvercommitRatio</a></code> | <code>*f64</code> | Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio">StorageDeduplicationCompressionRatio</a></code> | <code>*f64</code> | The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. |

---

##### `CommitmentPlan`<sup>Optional</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan"></a>

```go
CommitmentPlan *string
```

- *Type:* *string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_3_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_1_YEAR_UPFRONT_PAYMENT', 'COMMITMENT_3_YEAR_UPFRONT_PAYMENT',

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#commitment_plan GoogleMigrationCenterPreferenceSet#commitment_plan}

---

##### `CpuOvercommitRatio`<sup>Optional</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio"></a>

```go
CpuOvercommitRatio *f64
```

- *Type:* *f64

CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#cpu_overcommit_ratio GoogleMigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `MemoryOvercommitRatio`<sup>Optional</sup> <a name="MemoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio"></a>

```go
MemoryOvercommitRatio *f64
```

- *Type:* *f64

Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#memory_overcommit_ratio GoogleMigrationCenterPreferenceSet#memory_overcommit_ratio}

---

##### `StorageDeduplicationCompressionRatio`<sup>Optional</sup> <a name="StorageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio"></a>

```go
StorageDeduplicationCompressionRatio *f64
```

- *Type:* *f64

The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression.

Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_migration_center_preference_set#storage_deduplication_compression_ratio GoogleMigrationCenterPreferenceSet#storage_deduplication_compression_ratio}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterPreferenceSetTimeoutsOutputReference <a name="GoogleMigrationCenterPreferenceSetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterPreferenceSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get"></a>

```go
func Get(index *f64) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode"></a>

```go
func ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries">PutAllowedMachineSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries">ResetAllowedMachineSeries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedMachineSeries` <a name="PutAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries"></a>

```go
func PutAllowedMachineSeries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedMachineSeries` <a name="ResetAllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries"></a>

```go
func ResetAllowedMachineSeries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries">AllowedMachineSeries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput">AllowedMachineSeriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedMachineSeries`<sup>Required</sup> <a name="AllowedMachineSeries" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries"></a>

```go
func AllowedMachineSeries() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a>

---

##### `AllowedMachineSeriesInput`<sup>Optional</sup> <a name="AllowedMachineSeriesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput"></a>

```go
func AllowedMachineSeriesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences">PutMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences">ResetMachinePreferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachinePreferences` <a name="PutMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences"></a>

```go
func PutMachinePreferences(value GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetMachinePreferences` <a name="ResetMachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences"></a>

```go
func ResetMachinePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences">MachinePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput">MachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachinePreferences`<sup>Required</sup> <a name="MachinePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences"></a>

```go
func MachinePreferences() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a>

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `MachinePreferencesInput`<sup>Optional</sup> <a name="MachinePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput"></a>

```go
func MachinePreferencesInput() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences">PutComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences">PutRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences">PutSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences">PutVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences">ResetComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences">ResetRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy">ResetSizingOptimizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences">ResetSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct">ResetTargetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences">ResetVmwareEnginePreferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputeEnginePreferences` <a name="PutComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences"></a>

```go
func PutComputeEnginePreferences(value GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `PutRegionPreferences` <a name="PutRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences"></a>

```go
func PutRegionPreferences(value GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `PutSoleTenancyPreferences` <a name="PutSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences"></a>

```go
func PutSoleTenancyPreferences(value GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `PutVmwareEnginePreferences` <a name="PutVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences"></a>

```go
func PutVmwareEnginePreferences(value GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan"></a>

```go
func ResetCommitmentPlan()
```

##### `ResetComputeEnginePreferences` <a name="ResetComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences"></a>

```go
func ResetComputeEnginePreferences()
```

##### `ResetRegionPreferences` <a name="ResetRegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences"></a>

```go
func ResetRegionPreferences()
```

##### `ResetSizingOptimizationStrategy` <a name="ResetSizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy"></a>

```go
func ResetSizingOptimizationStrategy()
```

##### `ResetSoleTenancyPreferences` <a name="ResetSoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences"></a>

```go
func ResetSoleTenancyPreferences()
```

##### `ResetTargetProduct` <a name="ResetTargetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct"></a>

```go
func ResetTargetProduct()
```

##### `ResetVmwareEnginePreferences` <a name="ResetVmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences"></a>

```go
func ResetVmwareEnginePreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences">ComputeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences">RegionPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences">SoleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences">VmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput">ComputeEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput">RegionPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput">SizingOptimizationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput">SoleTenancyPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput">TargetProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput">VmwareEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy">SizingOptimizationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct">TargetProduct</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeEnginePreferences`<sup>Required</sup> <a name="ComputeEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences"></a>

```go
func ComputeEnginePreferences() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a>

---

##### `RegionPreferences`<sup>Required</sup> <a name="RegionPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences"></a>

```go
func RegionPreferences() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a>

---

##### `SoleTenancyPreferences`<sup>Required</sup> <a name="SoleTenancyPreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences"></a>

```go
func SoleTenancyPreferences() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a>

---

##### `VmwareEnginePreferences`<sup>Required</sup> <a name="VmwareEnginePreferences" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences"></a>

```go
func VmwareEnginePreferences() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a>

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput"></a>

```go
func CommitmentPlanInput() *string
```

- *Type:* *string

---

##### `ComputeEnginePreferencesInput`<sup>Optional</sup> <a name="ComputeEnginePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput"></a>

```go
func ComputeEnginePreferencesInput() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `RegionPreferencesInput`<sup>Optional</sup> <a name="RegionPreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput"></a>

```go
func RegionPreferencesInput() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `SizingOptimizationStrategyInput`<sup>Optional</sup> <a name="SizingOptimizationStrategyInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput"></a>

```go
func SizingOptimizationStrategyInput() *string
```

- *Type:* *string

---

##### `SoleTenancyPreferencesInput`<sup>Optional</sup> <a name="SoleTenancyPreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput"></a>

```go
func SoleTenancyPreferencesInput() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `TargetProductInput`<sup>Optional</sup> <a name="TargetProductInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput"></a>

```go
func TargetProductInput() *string
```

- *Type:* *string

---

##### `VmwareEnginePreferencesInput`<sup>Optional</sup> <a name="VmwareEnginePreferencesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput"></a>

```go
func VmwareEnginePreferencesInput() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan"></a>

```go
func CommitmentPlan() *string
```

- *Type:* *string

---

##### `SizingOptimizationStrategy`<sup>Required</sup> <a name="SizingOptimizationStrategy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy"></a>

```go
func SizingOptimizationStrategy() *string
```

- *Type:* *string

---

##### `TargetProduct`<sup>Required</sup> <a name="TargetProduct" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct"></a>

```go
func TargetProduct() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterPreferenceSetVirtualMachinePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions">ResetPreferredRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredRegions` <a name="ResetPreferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions"></a>

```go
func ResetPreferredRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput">PreferredRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions">PreferredRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreferredRegionsInput`<sup>Optional</sup> <a name="PreferredRegionsInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput"></a>

```go
func PreferredRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredRegions`<sup>Required</sup> <a name="PreferredRegions" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions"></a>

```go
func PreferredRegions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get"></a>

```go
func Get(index *f64) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName">ResetNodeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeName` <a name="ResetNodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName"></a>

```go
func ResetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput"></a>

```go
func NodeNameInput() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes">PutNodeTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio">ResetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy">ResetHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes">ResetNodeTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeTypes` <a name="PutNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes"></a>

```go
func PutNodeTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan"></a>

```go
func ResetCommitmentPlan()
```

##### `ResetCpuOvercommitRatio` <a name="ResetCpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio"></a>

```go
func ResetCpuOvercommitRatio()
```

##### `ResetHostMaintenancePolicy` <a name="ResetHostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy"></a>

```go
func ResetHostMaintenancePolicy()
```

##### `ResetNodeTypes` <a name="ResetNodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes"></a>

```go
func ResetNodeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes">NodeTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput">CpuOvercommitRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput">HostMaintenancePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput">NodeTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy">HostMaintenancePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeTypes`<sup>Required</sup> <a name="NodeTypes" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes"></a>

```go
func NodeTypes() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a>

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput"></a>

```go
func CommitmentPlanInput() *string
```

- *Type:* *string

---

##### `CpuOvercommitRatioInput`<sup>Optional</sup> <a name="CpuOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```go
func CpuOvercommitRatioInput() *f64
```

- *Type:* *f64

---

##### `HostMaintenancePolicyInput`<sup>Optional</sup> <a name="HostMaintenancePolicyInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput"></a>

```go
func HostMaintenancePolicyInput() *string
```

- *Type:* *string

---

##### `NodeTypesInput`<sup>Optional</sup> <a name="NodeTypesInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput"></a>

```go
func NodeTypesInput() interface{}
```

- *Type:* interface{}

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan"></a>

```go
func CommitmentPlan() *string
```

- *Type:* *string

---

##### `CpuOvercommitRatio`<sup>Required</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio"></a>

```go
func CpuOvercommitRatio() *f64
```

- *Type:* *f64

---

##### `HostMaintenancePolicy`<sup>Required</sup> <a name="HostMaintenancePolicy" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy"></a>

```go
func HostMaintenancePolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---


### GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference <a name="GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlemigrationcenterpreferenceset"

googlemigrationcenterpreferenceset.NewGoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan">ResetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio">ResetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio">ResetMemoryOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio">ResetStorageDeduplicationCompressionRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitmentPlan` <a name="ResetCommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan"></a>

```go
func ResetCommitmentPlan()
```

##### `ResetCpuOvercommitRatio` <a name="ResetCpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio"></a>

```go
func ResetCpuOvercommitRatio()
```

##### `ResetMemoryOvercommitRatio` <a name="ResetMemoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio"></a>

```go
func ResetMemoryOvercommitRatio()
```

##### `ResetStorageDeduplicationCompressionRatio` <a name="ResetStorageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio"></a>

```go
func ResetStorageDeduplicationCompressionRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput">CommitmentPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput">CpuOvercommitRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput">MemoryOvercommitRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput">StorageDeduplicationCompressionRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan">CommitmentPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio">CpuOvercommitRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio">MemoryOvercommitRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio">StorageDeduplicationCompressionRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitmentPlanInput`<sup>Optional</sup> <a name="CommitmentPlanInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput"></a>

```go
func CommitmentPlanInput() *string
```

- *Type:* *string

---

##### `CpuOvercommitRatioInput`<sup>Optional</sup> <a name="CpuOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```go
func CpuOvercommitRatioInput() *f64
```

- *Type:* *f64

---

##### `MemoryOvercommitRatioInput`<sup>Optional</sup> <a name="MemoryOvercommitRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput"></a>

```go
func MemoryOvercommitRatioInput() *f64
```

- *Type:* *f64

---

##### `StorageDeduplicationCompressionRatioInput`<sup>Optional</sup> <a name="StorageDeduplicationCompressionRatioInput" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput"></a>

```go
func StorageDeduplicationCompressionRatioInput() *f64
```

- *Type:* *f64

---

##### `CommitmentPlan`<sup>Required</sup> <a name="CommitmentPlan" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan"></a>

```go
func CommitmentPlan() *string
```

- *Type:* *string

---

##### `CpuOvercommitRatio`<sup>Required</sup> <a name="CpuOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio"></a>

```go
func CpuOvercommitRatio() *f64
```

- *Type:* *f64

---

##### `MemoryOvercommitRatio`<sup>Required</sup> <a name="MemoryOvercommitRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio"></a>

```go
func MemoryOvercommitRatio() *f64
```

- *Type:* *f64

---

##### `StorageDeduplicationCompressionRatio`<sup>Required</sup> <a name="StorageDeduplicationCompressionRatio" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio"></a>

```go
func StorageDeduplicationCompressionRatio() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMigrationCenterPreferenceSet.GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">GoogleMigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---



