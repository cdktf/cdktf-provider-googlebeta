# `googleBackupDrBackupVault` Submodule <a name="`googleBackupDrBackupVault` Submodule" id="@cdktf/provider-google-beta.googleBackupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrBackupVault <a name="GoogleBackupDrBackupVault" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

googlebackupdrbackupvault.NewGoogleBackupDrBackupVault(scope Construct, id *string, config GoogleBackupDrBackupVaultConfig) GoogleBackupDrBackupVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig">GoogleBackupDrBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig">GoogleBackupDrBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAccessRestriction">ResetAccessRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAllowMissing">ResetAllowMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetEffectiveTime">ResetEffectiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreBackupPlanReferences">ResetIgnoreBackupPlanReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreInactiveDatasources">ResetIgnoreInactiveDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBackupDrBackupVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

---

##### `ResetAccessRestriction` <a name="ResetAccessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAccessRestriction"></a>

```go
func ResetAccessRestriction()
```

##### `ResetAllowMissing` <a name="ResetAllowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAllowMissing"></a>

```go
func ResetAllowMissing()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEffectiveTime` <a name="ResetEffectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetEffectiveTime"></a>

```go
func ResetEffectiveTime()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetForceUpdate"></a>

```go
func ResetForceUpdate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreBackupPlanReferences` <a name="ResetIgnoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```go
func ResetIgnoreBackupPlanReferences()
```

##### `ResetIgnoreInactiveDatasources` <a name="ResetIgnoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```go
func ResetIgnoreInactiveDatasources()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

googlebackupdrbackupvault.GoogleBackupDrBackupVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

googlebackupdrbackupvault.GoogleBackupDrBackupVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

googlebackupdrbackupvault.GoogleBackupDrBackupVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

googlebackupdrbackupvault.GoogleBackupDrBackupVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBackupDrBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupCount">BackupCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.deletable">Deletable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference">GoogleBackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestrictionInput">AccessRestrictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissingInput">AllowMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">BackupMinimumEnforcedRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTimeInput">EffectiveTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferencesInput">IgnoreBackupPlanReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasourcesInput">IgnoreInactiveDatasourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestriction">AccessRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissing">AllowMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">BackupMinimumEnforcedRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTime">EffectiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferences">IgnoreBackupPlanReferences</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasources">IgnoreInactiveDatasources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupCount"></a>

```go
func BackupCount() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.deletable"></a>

```go
func Deletable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeouts"></a>

```go
func Timeouts() GoogleBackupDrBackupVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference">GoogleBackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.totalStoredBytes"></a>

```go
func TotalStoredBytes() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccessRestrictionInput`<sup>Optional</sup> <a name="AccessRestrictionInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestrictionInput"></a>

```go
func AccessRestrictionInput() *string
```

- *Type:* *string

---

##### `AllowMissingInput`<sup>Optional</sup> <a name="AllowMissingInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissingInput"></a>

```go
func AllowMissingInput() interface{}
```

- *Type:* interface{}

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BackupMinimumEnforcedRetentionDurationInput`<sup>Optional</sup> <a name="BackupMinimumEnforcedRetentionDurationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```go
func BackupMinimumEnforcedRetentionDurationInput() *string
```

- *Type:* *string

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultIdInput"></a>

```go
func BackupVaultIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EffectiveTimeInput`<sup>Optional</sup> <a name="EffectiveTimeInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTimeInput"></a>

```go
func EffectiveTimeInput() *string
```

- *Type:* *string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdateInput"></a>

```go
func ForceUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreBackupPlanReferencesInput`<sup>Optional</sup> <a name="IgnoreBackupPlanReferencesInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```go
func IgnoreBackupPlanReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreInactiveDatasourcesInput`<sup>Optional</sup> <a name="IgnoreInactiveDatasourcesInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```go
func IgnoreInactiveDatasourcesInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessRestriction`<sup>Required</sup> <a name="AccessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.accessRestriction"></a>

```go
func AccessRestriction() *string
```

- *Type:* *string

---

##### `AllowMissing`<sup>Required</sup> <a name="AllowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.allowMissing"></a>

```go
func AllowMissing() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BackupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```go
func BackupMinimumEnforcedRetentionDuration() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.effectiveTime"></a>

```go
func EffectiveTime() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.forceUpdate"></a>

```go
func ForceUpdate() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreBackupPlanReferences`<sup>Required</sup> <a name="IgnoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```go
func IgnoreBackupPlanReferences() interface{}
```

- *Type:* interface{}

---

##### `IgnoreInactiveDatasources`<sup>Required</sup> <a name="IgnoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```go
func IgnoreInactiveDatasources() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrBackupVaultConfig <a name="GoogleBackupDrBackupVaultConfig" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

&googlebackupdrbackupvault.GoogleBackupDrBackupVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupMinimumEnforcedRetentionDuration: *string,
	BackupVaultId: *string,
	Location: *string,
	AccessRestriction: *string,
	AllowMissing: interface{},
	Annotations: *map[string]*string,
	Description: *string,
	EffectiveTime: *string,
	ForceDelete: interface{},
	ForceUpdate: interface{},
	Id: *string,
	IgnoreBackupPlanReferences: interface{},
	IgnoreInactiveDatasources: interface{},
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">BackupMinimumEnforcedRetentionDuration</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.location">Location</a></code> | <code>*string</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.accessRestriction">AccessRestriction</a></code> | <code>*string</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.allowMissing">AllowMissing</a></code> | <code>interface{}</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.description">Description</a></code> | <code>*string</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.effectiveTime">EffectiveTime</a></code> | <code>*string</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">IgnoreBackupPlanReferences</a></code> | <code>interface{}</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreInactiveDatasources">IgnoreInactiveDatasources</a></code> | <code>interface{}</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```go
BackupMinimumEnforcedRetentionDuration *string
```

- *Type:* *string

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#backup_minimum_enforced_retention_duration GoogleBackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.backupVaultId"></a>

```go
BackupVaultId *string
```

- *Type:* *string

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#backup_vault_id GoogleBackupDrBackupVault#backup_vault_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#location GoogleBackupDrBackupVault#location}

---

##### `AccessRestriction`<sup>Optional</sup> <a name="AccessRestriction" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.accessRestriction"></a>

```go
AccessRestriction *string
```

- *Type:* *string

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#access_restriction GoogleBackupDrBackupVault#access_restriction}

---

##### `AllowMissing`<sup>Optional</sup> <a name="AllowMissing" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.allowMissing"></a>

```go
AllowMissing interface{}
```

- *Type:* interface{}

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#allow_missing GoogleBackupDrBackupVault#allow_missing}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#annotations GoogleBackupDrBackupVault#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#description GoogleBackupDrBackupVault#description}

---

##### `EffectiveTime`<sup>Optional</sup> <a name="EffectiveTime" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.effectiveTime"></a>

```go
EffectiveTime *string
```

- *Type:* *string

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#effective_time GoogleBackupDrBackupVault#effective_time}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#force_delete GoogleBackupDrBackupVault#force_delete}

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.forceUpdate"></a>

```go
ForceUpdate interface{}
```

- *Type:* interface{}

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#force_update GoogleBackupDrBackupVault#force_update}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#id GoogleBackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreBackupPlanReferences`<sup>Optional</sup> <a name="IgnoreBackupPlanReferences" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```go
IgnoreBackupPlanReferences interface{}
```

- *Type:* interface{}

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#ignore_backup_plan_references GoogleBackupDrBackupVault#ignore_backup_plan_references}

---

##### `IgnoreInactiveDatasources`<sup>Optional</sup> <a name="IgnoreInactiveDatasources" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```go
IgnoreInactiveDatasources interface{}
```

- *Type:* interface{}

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#ignore_inactive_datasources GoogleBackupDrBackupVault#ignore_inactive_datasources}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#labels GoogleBackupDrBackupVault#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#project GoogleBackupDrBackupVault#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultConfig.property.timeouts"></a>

```go
Timeouts GoogleBackupDrBackupVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts">GoogleBackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#timeouts GoogleBackupDrBackupVault#timeouts}

---

### GoogleBackupDrBackupVaultTimeouts <a name="GoogleBackupDrBackupVaultTimeouts" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

&googlebackupdrbackupvault.GoogleBackupDrBackupVaultTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#create GoogleBackupDrBackupVault#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#delete GoogleBackupDrBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#update GoogleBackupDrBackupVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#create GoogleBackupDrBackupVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#delete GoogleBackupDrBackupVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_backup_vault#update GoogleBackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrBackupVaultTimeoutsOutputReference <a name="GoogleBackupDrBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebackupdrbackupvault"

googlebackupdrbackupvault.NewGoogleBackupDrBackupVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBackupDrBackupVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBackupDrBackupVault.GoogleBackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



