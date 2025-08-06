# `googleNetappBackupVault` Submodule <a name="`googleNetappBackupVault` Submodule" id="@cdktf/provider-google-beta.googleNetappBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappBackupVault <a name="GoogleNetappBackupVault" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault google_netapp_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

googlenetappbackupvault.NewGoogleNetappBackupVault(scope Construct, id *string, config GoogleNetappBackupVaultConfig) GoogleNetappBackupVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig">GoogleNetappBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig">GoogleNetappBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy">PutBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRegion">ResetBackupRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRetentionPolicy">ResetBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupVaultType">ResetBackupVaultType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupRetentionPolicy` <a name="PutBackupRetentionPolicy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy"></a>

```go
func PutBackupRetentionPolicy(value GoogleNetappBackupVaultBackupRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetappBackupVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>

---

##### `ResetBackupRegion` <a name="ResetBackupRegion" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRegion"></a>

```go
func ResetBackupRegion()
```

##### `ResetBackupRetentionPolicy` <a name="ResetBackupRetentionPolicy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRetentionPolicy"></a>

```go
func ResetBackupRetentionPolicy()
```

##### `ResetBackupVaultType` <a name="ResetBackupVaultType" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupVaultType"></a>

```go
func ResetBackupVaultType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

googlenetappbackupvault.GoogleNetappBackupVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

googlenetappbackupvault.GoogleNetappBackupVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

googlenetappbackupvault.GoogleNetappBackupVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

googlenetappbackupvault.GoogleNetappBackupVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetappBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetappBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetappBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicy">BackupRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference">GoogleNetappBackupVaultBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.destinationBackupVault">DestinationBackupVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceBackupVault">SourceBackupVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference">GoogleNetappBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegionInput">BackupRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicyInput">BackupRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultTypeInput">BackupVaultTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegion">BackupRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultType">BackupVaultType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupRetentionPolicy`<sup>Required</sup> <a name="BackupRetentionPolicy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicy"></a>

```go
func BackupRetentionPolicy() GoogleNetappBackupVaultBackupRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference">GoogleNetappBackupVaultBackupRetentionPolicyOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DestinationBackupVault`<sup>Required</sup> <a name="DestinationBackupVault" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.destinationBackupVault"></a>

```go
func DestinationBackupVault() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SourceBackupVault`<sup>Required</sup> <a name="SourceBackupVault" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceBackupVault"></a>

```go
func SourceBackupVault() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeouts"></a>

```go
func Timeouts() GoogleNetappBackupVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference">GoogleNetappBackupVaultTimeoutsOutputReference</a>

---

##### `BackupRegionInput`<sup>Optional</sup> <a name="BackupRegionInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegionInput"></a>

```go
func BackupRegionInput() *string
```

- *Type:* *string

---

##### `BackupRetentionPolicyInput`<sup>Optional</sup> <a name="BackupRetentionPolicyInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicyInput"></a>

```go
func BackupRetentionPolicyInput() GoogleNetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

---

##### `BackupVaultTypeInput`<sup>Optional</sup> <a name="BackupVaultTypeInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultTypeInput"></a>

```go
func BackupVaultTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupRegion`<sup>Required</sup> <a name="BackupRegion" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegion"></a>

```go
func BackupRegion() *string
```

- *Type:* *string

---

##### `BackupVaultType`<sup>Required</sup> <a name="BackupVaultType" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultType"></a>

```go
func BackupVaultType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappBackupVaultBackupRetentionPolicy <a name="GoogleNetappBackupVaultBackupRetentionPolicy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

&googlenetappbackupvault.GoogleNetappBackupVaultBackupRetentionPolicy {
	BackupMinimumEnforcedRetentionDays: *f64,
	DailyBackupImmutable: interface{},
	ManualBackupImmutable: interface{},
	MonthlyBackupImmutable: interface{},
	WeeklyBackupImmutable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays">BackupMinimumEnforcedRetentionDays</a></code> | <code>*f64</code> | Minimum retention duration in days for backups in the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable">DailyBackupImmutable</a></code> | <code>interface{}</code> | Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable">ManualBackupImmutable</a></code> | <code>interface{}</code> | Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable">MonthlyBackupImmutable</a></code> | <code>interface{}</code> | Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable">WeeklyBackupImmutable</a></code> | <code>interface{}</code> | Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |

---

##### `BackupMinimumEnforcedRetentionDays`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDays" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays"></a>

```go
BackupMinimumEnforcedRetentionDays *f64
```

- *Type:* *f64

Minimum retention duration in days for backups in the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#backup_minimum_enforced_retention_days GoogleNetappBackupVault#backup_minimum_enforced_retention_days}

---

##### `DailyBackupImmutable`<sup>Optional</sup> <a name="DailyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable"></a>

```go
DailyBackupImmutable interface{}
```

- *Type:* interface{}

Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#daily_backup_immutable GoogleNetappBackupVault#daily_backup_immutable}

---

##### `ManualBackupImmutable`<sup>Optional</sup> <a name="ManualBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable"></a>

```go
ManualBackupImmutable interface{}
```

- *Type:* interface{}

Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#manual_backup_immutable GoogleNetappBackupVault#manual_backup_immutable}

---

##### `MonthlyBackupImmutable`<sup>Optional</sup> <a name="MonthlyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable"></a>

```go
MonthlyBackupImmutable interface{}
```

- *Type:* interface{}

Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#monthly_backup_immutable GoogleNetappBackupVault#monthly_backup_immutable}

---

##### `WeeklyBackupImmutable`<sup>Optional</sup> <a name="WeeklyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable"></a>

```go
WeeklyBackupImmutable interface{}
```

- *Type:* interface{}

Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#weekly_backup_immutable GoogleNetappBackupVault#weekly_backup_immutable}

---

### GoogleNetappBackupVaultConfig <a name="GoogleNetappBackupVaultConfig" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

&googlenetappbackupvault.GoogleNetappBackupVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	BackupRegion: *string,
	BackupRetentionPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy,
	BackupVaultType: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.location">Location</a></code> | <code>*string</code> | Location (region) of the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the backup vault. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRegion">BackupRegion</a></code> | <code>*string</code> | Region in which backup is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRetentionPolicy">BackupRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a></code> | backup_retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupVaultType">BackupVaultType</a></code> | <code>*string</code> | Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#id GoogleNetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#project GoogleNetappBackupVault#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location (region) of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#location GoogleNetappBackupVault#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the backup vault. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#name GoogleNetappBackupVault#name}

---

##### `BackupRegion`<sup>Optional</sup> <a name="BackupRegion" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRegion"></a>

```go
BackupRegion *string
```

- *Type:* *string

Region in which backup is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#backup_region GoogleNetappBackupVault#backup_region}

---

##### `BackupRetentionPolicy`<sup>Optional</sup> <a name="BackupRetentionPolicy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRetentionPolicy"></a>

```go
BackupRetentionPolicy GoogleNetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

backup_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#backup_retention_policy GoogleNetappBackupVault#backup_retention_policy}

---

##### `BackupVaultType`<sup>Optional</sup> <a name="BackupVaultType" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupVaultType"></a>

```go
BackupVaultType *string
```

- *Type:* *string

Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#backup_vault_type GoogleNetappBackupVault#backup_vault_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#description GoogleNetappBackupVault#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#id GoogleNetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#labels GoogleNetappBackupVault#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#project GoogleNetappBackupVault#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.timeouts"></a>

```go
Timeouts GoogleNetappBackupVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#timeouts GoogleNetappBackupVault#timeouts}

---

### GoogleNetappBackupVaultTimeouts <a name="GoogleNetappBackupVaultTimeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

&googlenetappbackupvault.GoogleNetappBackupVaultTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#create GoogleNetappBackupVault#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#delete GoogleNetappBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#update GoogleNetappBackupVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#create GoogleNetappBackupVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#delete GoogleNetappBackupVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_netapp_backup_vault#update GoogleNetappBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappBackupVaultBackupRetentionPolicyOutputReference <a name="GoogleNetappBackupVaultBackupRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

googlenetappbackupvault.NewGoogleNetappBackupVaultBackupRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappBackupVaultBackupRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable">ResetDailyBackupImmutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable">ResetManualBackupImmutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable">ResetMonthlyBackupImmutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable">ResetWeeklyBackupImmutable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDailyBackupImmutable` <a name="ResetDailyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable"></a>

```go
func ResetDailyBackupImmutable()
```

##### `ResetManualBackupImmutable` <a name="ResetManualBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable"></a>

```go
func ResetManualBackupImmutable()
```

##### `ResetMonthlyBackupImmutable` <a name="ResetMonthlyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable"></a>

```go
func ResetMonthlyBackupImmutable()
```

##### `ResetWeeklyBackupImmutable` <a name="ResetWeeklyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable"></a>

```go
func ResetWeeklyBackupImmutable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput">BackupMinimumEnforcedRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput">DailyBackupImmutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput">ManualBackupImmutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput">MonthlyBackupImmutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput">WeeklyBackupImmutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays">BackupMinimumEnforcedRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable">DailyBackupImmutable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable">ManualBackupImmutable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable">MonthlyBackupImmutable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable">WeeklyBackupImmutable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupMinimumEnforcedRetentionDaysInput`<sup>Optional</sup> <a name="BackupMinimumEnforcedRetentionDaysInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput"></a>

```go
func BackupMinimumEnforcedRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `DailyBackupImmutableInput`<sup>Optional</sup> <a name="DailyBackupImmutableInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput"></a>

```go
func DailyBackupImmutableInput() interface{}
```

- *Type:* interface{}

---

##### `ManualBackupImmutableInput`<sup>Optional</sup> <a name="ManualBackupImmutableInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput"></a>

```go
func ManualBackupImmutableInput() interface{}
```

- *Type:* interface{}

---

##### `MonthlyBackupImmutableInput`<sup>Optional</sup> <a name="MonthlyBackupImmutableInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput"></a>

```go
func MonthlyBackupImmutableInput() interface{}
```

- *Type:* interface{}

---

##### `WeeklyBackupImmutableInput`<sup>Optional</sup> <a name="WeeklyBackupImmutableInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput"></a>

```go
func WeeklyBackupImmutableInput() interface{}
```

- *Type:* interface{}

---

##### `BackupMinimumEnforcedRetentionDays`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDays" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays"></a>

```go
func BackupMinimumEnforcedRetentionDays() *f64
```

- *Type:* *f64

---

##### `DailyBackupImmutable`<sup>Required</sup> <a name="DailyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable"></a>

```go
func DailyBackupImmutable() interface{}
```

- *Type:* interface{}

---

##### `ManualBackupImmutable`<sup>Required</sup> <a name="ManualBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable"></a>

```go
func ManualBackupImmutable() interface{}
```

- *Type:* interface{}

---

##### `MonthlyBackupImmutable`<sup>Required</sup> <a name="MonthlyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable"></a>

```go
func MonthlyBackupImmutable() interface{}
```

- *Type:* interface{}

---

##### `WeeklyBackupImmutable`<sup>Required</sup> <a name="WeeklyBackupImmutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable"></a>

```go
func WeeklyBackupImmutable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

---


### GoogleNetappBackupVaultTimeoutsOutputReference <a name="GoogleNetappBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetappbackupvault"

googlenetappbackupvault.NewGoogleNetappBackupVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappBackupVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



