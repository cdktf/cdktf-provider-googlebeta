# `googleLoggingFolderBucketConfig` Submodule <a name="`googleLoggingFolderBucketConfig` Submodule" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingFolderBucketConfig <a name="GoogleLoggingFolderBucketConfig" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config google_logging_folder_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.NewGoogleLoggingFolderBucketConfig(scope Construct, id *string, config GoogleLoggingFolderBucketConfigConfig) GoogleLoggingFolderBucketConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig">GoogleLoggingFolderBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig">GoogleLoggingFolderBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putIndexConfigs">PutIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetIndexConfigs">ResetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putCmekSettings"></a>

```go
func PutCmekSettings(value GoogleLoggingFolderBucketConfigCmekSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

---

##### `PutIndexConfigs` <a name="PutIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putIndexConfigs"></a>

```go
func PutIndexConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetCmekSettings"></a>

```go
func ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexConfigs` <a name="ResetIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetIndexConfigs"></a>

```go
func ResetIndexConfigs()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingFolderBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.GoogleLoggingFolderBucketConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.GoogleLoggingFolderBucketConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.GoogleLoggingFolderBucketConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.GoogleLoggingFolderBucketConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleLoggingFolderBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleLoggingFolderBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleLoggingFolderBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingFolderBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference">GoogleLoggingFolderBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigs">IndexConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList">GoogleLoggingFolderBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketIdInput">BucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigsInput">IndexConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettings"></a>

```go
func CmekSettings() GoogleLoggingFolderBucketConfigCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference">GoogleLoggingFolderBucketConfigCmekSettingsOutputReference</a>

---

##### `IndexConfigs`<sup>Required</sup> <a name="IndexConfigs" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigs"></a>

```go
func IndexConfigs() GoogleLoggingFolderBucketConfigIndexConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList">GoogleLoggingFolderBucketConfigIndexConfigsList</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketIdInput"></a>

```go
func BucketIdInput() *string
```

- *Type:* *string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.cmekSettingsInput"></a>

```go
func CmekSettingsInput() GoogleLoggingFolderBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexConfigsInput`<sup>Optional</sup> <a name="IndexConfigsInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.indexConfigsInput"></a>

```go
func IndexConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.bucketId"></a>

```go
func BucketId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingFolderBucketConfigCmekSettings <a name="GoogleLoggingFolderBucketConfigCmekSettings" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

&googleloggingfolderbucketconfig.GoogleLoggingFolderBucketConfigCmekSettings {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name for the configured Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#kms_key_name GoogleLoggingFolderBucketConfig#kms_key_name}

---

### GoogleLoggingFolderBucketConfigConfig <a name="GoogleLoggingFolderBucketConfigConfig" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

&googleloggingfolderbucketconfig.GoogleLoggingFolderBucketConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketId: *string,
	Folder: *string,
	Location: *string,
	CmekSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings,
	Description: *string,
	Id: *string,
	IndexConfigs: interface{},
	RetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.folder">Folder</a></code> | <code>*string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#id GoogleLoggingFolderBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.indexConfigs">IndexConfigs</a></code> | <code>interface{}</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.bucketId"></a>

```go
BucketId *string
```

- *Type:* *string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#bucket_id GoogleLoggingFolderBucketConfig#bucket_id}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#folder GoogleLoggingFolderBucketConfig#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#location GoogleLoggingFolderBucketConfig#location}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.cmekSettings"></a>

```go
CmekSettings GoogleLoggingFolderBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#cmek_settings GoogleLoggingFolderBucketConfig#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#description GoogleLoggingFolderBucketConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#id GoogleLoggingFolderBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexConfigs`<sup>Optional</sup> <a name="IndexConfigs" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.indexConfigs"></a>

```go
IndexConfigs interface{}
```

- *Type:* interface{}

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#index_configs GoogleLoggingFolderBucketConfig#index_configs}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#retention_days GoogleLoggingFolderBucketConfig#retention_days}

---

### GoogleLoggingFolderBucketConfigIndexConfigs <a name="GoogleLoggingFolderBucketConfigIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

&googleloggingfolderbucketconfig.GoogleLoggingFolderBucketConfigIndexConfigs {
	FieldPath: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.type">Type</a></code> | <code>*string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#field_path GoogleLoggingFolderBucketConfig#field_path}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigs.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation](https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_logging_folder_bucket_config#type GoogleLoggingFolderBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingFolderBucketConfigCmekSettingsOutputReference <a name="GoogleLoggingFolderBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.NewGoogleLoggingFolderBucketConfigCmekSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingFolderBucketConfigCmekSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```go
func KmsKeyVersionName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingFolderBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigCmekSettings">GoogleLoggingFolderBucketConfigCmekSettings</a>

---


### GoogleLoggingFolderBucketConfigIndexConfigsList <a name="GoogleLoggingFolderBucketConfigIndexConfigsList" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.NewGoogleLoggingFolderBucketConfigIndexConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLoggingFolderBucketConfigIndexConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.get"></a>

```go
func Get(index *f64) GoogleLoggingFolderBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLoggingFolderBucketConfigIndexConfigsOutputReference <a name="GoogleLoggingFolderBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingfolderbucketconfig"

googleloggingfolderbucketconfig.NewGoogleLoggingFolderBucketConfigIndexConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLoggingFolderBucketConfigIndexConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingFolderBucketConfig.GoogleLoggingFolderBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



