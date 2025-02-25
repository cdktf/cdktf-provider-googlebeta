# `googleSecurityScannerScanConfig` Submodule <a name="`googleSecurityScannerScanConfig` Submodule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecurityScannerScanConfig <a name="GoogleSecurityScannerScanConfig" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config google_security_scanner_scan_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.NewGoogleSecurityScannerScanConfig(scope Construct, id *string, config GoogleSecurityScannerScanConfigConfig) GoogleSecurityScannerScanConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig">GoogleSecurityScannerScanConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig">GoogleSecurityScannerScanConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetBlacklistPatterns">ResetBlacklistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetExportToSecurityCommandCenter">ResetExportToSecurityCommandCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetMaxQps">ResetMaxQps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTargetPlatforms">ResetTargetPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetUserAgent">ResetUserAgent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication"></a>

```go
func PutAuthentication(value GoogleSecurityScannerScanConfigAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule"></a>

```go
func PutSchedule(value GoogleSecurityScannerScanConfigSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSecurityScannerScanConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetBlacklistPatterns` <a name="ResetBlacklistPatterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetBlacklistPatterns"></a>

```go
func ResetBlacklistPatterns()
```

##### `ResetExportToSecurityCommandCenter` <a name="ResetExportToSecurityCommandCenter" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetExportToSecurityCommandCenter"></a>

```go
func ResetExportToSecurityCommandCenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxQps` <a name="ResetMaxQps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetMaxQps"></a>

```go
func ResetMaxQps()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTargetPlatforms` <a name="ResetTargetPlatforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTargetPlatforms"></a>

```go
func ResetTargetPlatforms()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserAgent` <a name="ResetUserAgent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.resetUserAgent"></a>

```go
func ResetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecurityScannerScanConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSecurityScannerScanConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSecurityScannerScanConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSecurityScannerScanConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecurityScannerScanConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference">GoogleSecurityScannerScanConfigAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference">GoogleSecurityScannerScanConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference">GoogleSecurityScannerScanConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatternsInput">BlacklistPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenterInput">ExportToSecurityCommandCenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQpsInput">MaxQpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrlsInput">StartingUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatformsInput">TargetPlatformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgentInput">UserAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatterns">BlacklistPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenter">ExportToSecurityCommandCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQps">MaxQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrls">StartingUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatforms">TargetPlatforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgent">UserAgent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authentication"></a>

```go
func Authentication() GoogleSecurityScannerScanConfigAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference">GoogleSecurityScannerScanConfigAuthenticationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.schedule"></a>

```go
func Schedule() GoogleSecurityScannerScanConfigScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference">GoogleSecurityScannerScanConfigScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeouts"></a>

```go
func Timeouts() GoogleSecurityScannerScanConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference">GoogleSecurityScannerScanConfigTimeoutsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.authenticationInput"></a>

```go
func AuthenticationInput() GoogleSecurityScannerScanConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---

##### `BlacklistPatternsInput`<sup>Optional</sup> <a name="BlacklistPatternsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatternsInput"></a>

```go
func BlacklistPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExportToSecurityCommandCenterInput`<sup>Optional</sup> <a name="ExportToSecurityCommandCenterInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenterInput"></a>

```go
func ExportToSecurityCommandCenterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxQpsInput`<sup>Optional</sup> <a name="MaxQpsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQpsInput"></a>

```go
func MaxQpsInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.scheduleInput"></a>

```go
func ScheduleInput() GoogleSecurityScannerScanConfigSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---

##### `StartingUrlsInput`<sup>Optional</sup> <a name="StartingUrlsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrlsInput"></a>

```go
func StartingUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetPlatformsInput`<sup>Optional</sup> <a name="TargetPlatformsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatformsInput"></a>

```go
func TargetPlatformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserAgentInput`<sup>Optional</sup> <a name="UserAgentInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgentInput"></a>

```go
func UserAgentInput() *string
```

- *Type:* *string

---

##### `BlacklistPatterns`<sup>Required</sup> <a name="BlacklistPatterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.blacklistPatterns"></a>

```go
func BlacklistPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExportToSecurityCommandCenter`<sup>Required</sup> <a name="ExportToSecurityCommandCenter" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.exportToSecurityCommandCenter"></a>

```go
func ExportToSecurityCommandCenter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxQps`<sup>Required</sup> <a name="MaxQps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.maxQps"></a>

```go
func MaxQps() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StartingUrls`<sup>Required</sup> <a name="StartingUrls" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.startingUrls"></a>

```go
func StartingUrls() *[]*string
```

- *Type:* *[]*string

---

##### `TargetPlatforms`<sup>Required</sup> <a name="TargetPlatforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.targetPlatforms"></a>

```go
func TargetPlatforms() *[]*string
```

- *Type:* *[]*string

---

##### `UserAgent`<sup>Required</sup> <a name="UserAgent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.userAgent"></a>

```go
func UserAgent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecurityScannerScanConfigAuthentication <a name="GoogleSecurityScannerScanConfigAuthentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

&googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfigAuthentication {
	CustomAccount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount,
	GoogleAccount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.customAccount">CustomAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | custom_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.googleAccount">GoogleAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | google_account block. |

---

##### `CustomAccount`<sup>Optional</sup> <a name="CustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.customAccount"></a>

```go
CustomAccount GoogleSecurityScannerScanConfigAuthenticationCustomAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

custom_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#custom_account GoogleSecurityScannerScanConfig#custom_account}

---

##### `GoogleAccount`<sup>Optional</sup> <a name="GoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication.property.googleAccount"></a>

```go
GoogleAccount GoogleSecurityScannerScanConfigAuthenticationGoogleAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

google_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#google_account GoogleSecurityScannerScanConfig#google_account}

---

### GoogleSecurityScannerScanConfigAuthenticationCustomAccount <a name="GoogleSecurityScannerScanConfigAuthenticationCustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

&googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount {
	LoginUrl: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | The login form URL of the website. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.password">Password</a></code> | <code>*string</code> | The password of the custom account. The credential is stored encrypted in GCP. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.username">Username</a></code> | <code>*string</code> | The user name of the custom account. |

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.loginUrl"></a>

```go
LoginUrl *string
```

- *Type:* *string

The login form URL of the website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#login_url GoogleSecurityScannerScanConfig#login_url}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the custom account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount.property.username"></a>

```go
Username *string
```

- *Type:* *string

The user name of the custom account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

### GoogleSecurityScannerScanConfigAuthenticationGoogleAccount <a name="GoogleSecurityScannerScanConfigAuthenticationGoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

&googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.password">Password</a></code> | <code>*string</code> | The password of the Google account. The credential is stored encrypted in GCP. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.username">Username</a></code> | <code>*string</code> | The user name of the Google account. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the Google account. The credential is stored encrypted in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount.property.username"></a>

```go
Username *string
```

- *Type:* *string

The user name of the Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}

---

### GoogleSecurityScannerScanConfigConfig <a name="GoogleSecurityScannerScanConfigConfig" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

&googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	StartingUrls: *[]*string,
	Authentication: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication,
	BlacklistPatterns: *[]*string,
	ExportToSecurityCommandCenter: *string,
	Id: *string,
	MaxQps: *f64,
	Project: *string,
	Schedule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule,
	TargetPlatforms: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts,
	UserAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user provider display name of the ScanConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.startingUrls">StartingUrls</a></code> | <code>*[]*string</code> | The starting URLs from which the scanner finds site pages. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.blacklistPatterns">BlacklistPatterns</a></code> | <code>*[]*string</code> | The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.exportToSecurityCommandCenter">ExportToSecurityCommandCenter</a></code> | <code>*string</code> | Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.maxQps">MaxQps</a></code> | <code>*f64</code> | The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.targetPlatforms">TargetPlatforms</a></code> | <code>*[]*string</code> | Set of Cloud Platforms targeted by the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.userAgent">UserAgent</a></code> | <code>*string</code> | Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user provider display name of the ScanConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#display_name GoogleSecurityScannerScanConfig#display_name}

---

##### `StartingUrls`<sup>Required</sup> <a name="StartingUrls" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.startingUrls"></a>

```go
StartingUrls *[]*string
```

- *Type:* *[]*string

The starting URLs from which the scanner finds site pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#starting_urls GoogleSecurityScannerScanConfig#starting_urls}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.authentication"></a>

```go
Authentication GoogleSecurityScannerScanConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#authentication GoogleSecurityScannerScanConfig#authentication}

---

##### `BlacklistPatterns`<sup>Optional</sup> <a name="BlacklistPatterns" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.blacklistPatterns"></a>

```go
BlacklistPatterns *[]*string
```

- *Type:* *[]*string

The blacklist URL patterns as described in https://cloud.google.com/security-scanner/docs/excluded-urls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#blacklist_patterns GoogleSecurityScannerScanConfig#blacklist_patterns}

---

##### `ExportToSecurityCommandCenter`<sup>Optional</sup> <a name="ExportToSecurityCommandCenter" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.exportToSecurityCommandCenter"></a>

```go
ExportToSecurityCommandCenter *string
```

- *Type:* *string

Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#export_to_security_command_center GoogleSecurityScannerScanConfig#export_to_security_command_center}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#id GoogleSecurityScannerScanConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxQps`<sup>Optional</sup> <a name="MaxQps" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.maxQps"></a>

```go
MaxQps *f64
```

- *Type:* *f64

The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. Defaults to 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#max_qps GoogleSecurityScannerScanConfig#max_qps}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.schedule"></a>

```go
Schedule GoogleSecurityScannerScanConfigSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#schedule GoogleSecurityScannerScanConfig#schedule}

---

##### `TargetPlatforms`<sup>Optional</sup> <a name="TargetPlatforms" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.targetPlatforms"></a>

```go
TargetPlatforms *[]*string
```

- *Type:* *[]*string

Set of Cloud Platforms targeted by the scan.

If empty, APP_ENGINE will be used as a default. Possible values: ["APP_ENGINE", "COMPUTE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#target_platforms GoogleSecurityScannerScanConfig#target_platforms}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleSecurityScannerScanConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts">GoogleSecurityScannerScanConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#timeouts GoogleSecurityScannerScanConfig#timeouts}

---

##### `UserAgent`<sup>Optional</sup> <a name="UserAgent" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigConfig.property.userAgent"></a>

```go
UserAgent *string
```

- *Type:* *string

Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#user_agent GoogleSecurityScannerScanConfig#user_agent}

---

### GoogleSecurityScannerScanConfigSchedule <a name="GoogleSecurityScannerScanConfigSchedule" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

&googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfigSchedule {
	IntervalDurationDays: *f64,
	ScheduleTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.intervalDurationDays">IntervalDurationDays</a></code> | <code>*f64</code> | The duration of time between executions in days. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.scheduleTime">ScheduleTime</a></code> | <code>*string</code> | A timestamp indicates when the next run will be scheduled. |

---

##### `IntervalDurationDays`<sup>Required</sup> <a name="IntervalDurationDays" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.intervalDurationDays"></a>

```go
IntervalDurationDays *f64
```

- *Type:* *f64

The duration of time between executions in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#interval_duration_days GoogleSecurityScannerScanConfig#interval_duration_days}

---

##### `ScheduleTime`<sup>Optional</sup> <a name="ScheduleTime" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule.property.scheduleTime"></a>

```go
ScheduleTime *string
```

- *Type:* *string

A timestamp indicates when the next run will be scheduled.

The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#schedule_time GoogleSecurityScannerScanConfig#schedule_time}

---

### GoogleSecurityScannerScanConfigTimeouts <a name="GoogleSecurityScannerScanConfigTimeouts" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

&googlesecurityscannerscanconfig.GoogleSecurityScannerScanConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.NewGoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrlInput">LoginUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoginUrlInput`<sup>Optional</sup> <a name="LoginUrlInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrlInput"></a>

```go
func LoginUrlInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.loginUrl"></a>

```go
func LoginUrl() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSecurityScannerScanConfigAuthenticationCustomAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---


### GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.NewGoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSecurityScannerScanConfigAuthenticationGoogleAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---


### GoogleSecurityScannerScanConfigAuthenticationOutputReference <a name="GoogleSecurityScannerScanConfigAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.NewGoogleSecurityScannerScanConfigAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecurityScannerScanConfigAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount">PutCustomAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount">PutGoogleAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetCustomAccount">ResetCustomAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetGoogleAccount">ResetGoogleAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomAccount` <a name="PutCustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount"></a>

```go
func PutCustomAccount(value GoogleSecurityScannerScanConfigAuthenticationCustomAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putCustomAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---

##### `PutGoogleAccount` <a name="PutGoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount"></a>

```go
func PutGoogleAccount(value GoogleSecurityScannerScanConfigAuthenticationGoogleAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.putGoogleAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---

##### `ResetCustomAccount` <a name="ResetCustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetCustomAccount"></a>

```go
func ResetCustomAccount()
```

##### `ResetGoogleAccount` <a name="ResetGoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.resetGoogleAccount"></a>

```go
func ResetGoogleAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccount">CustomAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccount">GoogleAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccountInput">CustomAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccountInput">GoogleAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAccount`<sup>Required</sup> <a name="CustomAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccount"></a>

```go
func CustomAccount() GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference</a>

---

##### `GoogleAccount`<sup>Required</sup> <a name="GoogleAccount" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccount"></a>

```go
func GoogleAccount() GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference">GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference</a>

---

##### `CustomAccountInput`<sup>Optional</sup> <a name="CustomAccountInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.customAccountInput"></a>

```go
func CustomAccountInput() GoogleSecurityScannerScanConfigAuthenticationCustomAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationCustomAccount">GoogleSecurityScannerScanConfigAuthenticationCustomAccount</a>

---

##### `GoogleAccountInput`<sup>Optional</sup> <a name="GoogleAccountInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.googleAccountInput"></a>

```go
func GoogleAccountInput() GoogleSecurityScannerScanConfigAuthenticationGoogleAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationGoogleAccount">GoogleSecurityScannerScanConfigAuthenticationGoogleAccount</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSecurityScannerScanConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigAuthentication">GoogleSecurityScannerScanConfigAuthentication</a>

---


### GoogleSecurityScannerScanConfigScheduleOutputReference <a name="GoogleSecurityScannerScanConfigScheduleOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.NewGoogleSecurityScannerScanConfigScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecurityScannerScanConfigScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resetScheduleTime">ResetScheduleTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduleTime` <a name="ResetScheduleTime" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.resetScheduleTime"></a>

```go
func ResetScheduleTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDaysInput">IntervalDurationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTimeInput">ScheduleTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDays">IntervalDurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTime">ScheduleTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalDurationDaysInput`<sup>Optional</sup> <a name="IntervalDurationDaysInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDaysInput"></a>

```go
func IntervalDurationDaysInput() *f64
```

- *Type:* *f64

---

##### `ScheduleTimeInput`<sup>Optional</sup> <a name="ScheduleTimeInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTimeInput"></a>

```go
func ScheduleTimeInput() *string
```

- *Type:* *string

---

##### `IntervalDurationDays`<sup>Required</sup> <a name="IntervalDurationDays" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.intervalDurationDays"></a>

```go
func IntervalDurationDays() *f64
```

- *Type:* *f64

---

##### `ScheduleTime`<sup>Required</sup> <a name="ScheduleTime" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.scheduleTime"></a>

```go
func ScheduleTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSecurityScannerScanConfigSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigSchedule">GoogleSecurityScannerScanConfigSchedule</a>

---


### GoogleSecurityScannerScanConfigTimeoutsOutputReference <a name="GoogleSecurityScannerScanConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlesecurityscannerscanconfig"

googlesecurityscannerscanconfig.NewGoogleSecurityScannerScanConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecurityScannerScanConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityScannerScanConfig.GoogleSecurityScannerScanConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



