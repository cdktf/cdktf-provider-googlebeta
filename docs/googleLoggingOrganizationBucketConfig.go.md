# `googleLoggingOrganizationBucketConfig` Submodule <a name="`googleLoggingOrganizationBucketConfig` Submodule" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingOrganizationBucketConfig <a name="GoogleLoggingOrganizationBucketConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config google_logging_organization_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.NewGoogleLoggingOrganizationBucketConfig(scope Construct, id *string, config GoogleLoggingOrganizationBucketConfigConfig) GoogleLoggingOrganizationBucketConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig">GoogleLoggingOrganizationBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig">GoogleLoggingOrganizationBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putIndexConfigs">PutIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetIndexConfigs">ResetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings"></a>

```go
func PutCmekSettings(value GoogleLoggingOrganizationBucketConfigCmekSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---

##### `PutIndexConfigs` <a name="PutIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putIndexConfigs"></a>

```go
func PutIndexConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetCmekSettings"></a>

```go
func ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexConfigs` <a name="ResetIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetIndexConfigs"></a>

```go
func ResetIndexConfigs()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingOrganizationBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.GoogleLoggingOrganizationBucketConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.GoogleLoggingOrganizationBucketConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.GoogleLoggingOrganizationBucketConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.GoogleLoggingOrganizationBucketConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleLoggingOrganizationBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleLoggingOrganizationBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleLoggingOrganizationBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingOrganizationBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference">GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigs">IndexConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList">GoogleLoggingOrganizationBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketIdInput">BucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigsInput">IndexConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettings"></a>

```go
func CmekSettings() GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference">GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference</a>

---

##### `IndexConfigs`<sup>Required</sup> <a name="IndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigs"></a>

```go
func IndexConfigs() GoogleLoggingOrganizationBucketConfigIndexConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList">GoogleLoggingOrganizationBucketConfigIndexConfigsList</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketIdInput"></a>

```go
func BucketIdInput() *string
```

- *Type:* *string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettingsInput"></a>

```go
func CmekSettingsInput() GoogleLoggingOrganizationBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexConfigsInput`<sup>Optional</sup> <a name="IndexConfigsInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigsInput"></a>

```go
func IndexConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketId"></a>

```go
func BucketId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingOrganizationBucketConfigCmekSettings <a name="GoogleLoggingOrganizationBucketConfigCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

&googleloggingorganizationbucketconfig.GoogleLoggingOrganizationBucketConfigCmekSettings {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name for the configured Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#kms_key_name GoogleLoggingOrganizationBucketConfig#kms_key_name}

---

### GoogleLoggingOrganizationBucketConfigConfig <a name="GoogleLoggingOrganizationBucketConfigConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

&googleloggingorganizationbucketconfig.GoogleLoggingOrganizationBucketConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketId: *string,
	Location: *string,
	Organization: *string,
	CmekSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings,
	Description: *string,
	Id: *string,
	IndexConfigs: interface{},
	RetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.organization">Organization</a></code> | <code>*string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.indexConfigs">IndexConfigs</a></code> | <code>interface{}</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.bucketId"></a>

```go
BucketId *string
```

- *Type:* *string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#bucket_id GoogleLoggingOrganizationBucketConfig#bucket_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#location GoogleLoggingOrganizationBucketConfig#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#organization GoogleLoggingOrganizationBucketConfig#organization}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.cmekSettings"></a>

```go
CmekSettings GoogleLoggingOrganizationBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#cmek_settings GoogleLoggingOrganizationBucketConfig#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#description GoogleLoggingOrganizationBucketConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexConfigs`<sup>Optional</sup> <a name="IndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.indexConfigs"></a>

```go
IndexConfigs interface{}
```

- *Type:* interface{}

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#index_configs GoogleLoggingOrganizationBucketConfig#index_configs}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#retention_days GoogleLoggingOrganizationBucketConfig#retention_days}

---

### GoogleLoggingOrganizationBucketConfigIndexConfigs <a name="GoogleLoggingOrganizationBucketConfigIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

&googleloggingorganizationbucketconfig.GoogleLoggingOrganizationBucketConfigIndexConfigs {
	FieldPath: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.type">Type</a></code> | <code>*string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#field_path GoogleLoggingOrganizationBucketConfig#field_path}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation](https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_logging_organization_bucket_config#type GoogleLoggingOrganizationBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference <a name="GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.NewGoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```go
func KmsKeyVersionName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLoggingOrganizationBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---


### GoogleLoggingOrganizationBucketConfigIndexConfigsList <a name="GoogleLoggingOrganizationBucketConfigIndexConfigsList" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.NewGoogleLoggingOrganizationBucketConfigIndexConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLoggingOrganizationBucketConfigIndexConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.get"></a>

```go
func Get(index *f64) GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference <a name="GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleloggingorganizationbucketconfig"

googleloggingorganizationbucketconfig.NewGoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



