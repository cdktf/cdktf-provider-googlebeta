# `googleFilestoreInstance` Submodule <a name="`googleFilestoreInstance` Submodule" id="@cdktf/provider-google-beta.googleFilestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFilestoreInstance <a name="GoogleFilestoreInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstance(scope Construct, id *string, config GoogleFilestoreInstanceConfig) GoogleFilestoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig">GoogleFilestoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig">GoogleFilestoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares">PutFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putPerformanceConfig">PutPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionReason">ResetDeletionProtectionReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetPerformanceConfig">ResetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFileShares` <a name="PutFileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares"></a>

```go
func PutFileShares(value GoogleFilestoreInstanceFileShares)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPerformanceConfig` <a name="PutPerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putPerformanceConfig"></a>

```go
func PutPerformanceConfig(value GoogleFilestoreInstancePerformanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFilestoreInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetDeletionProtectionReason` <a name="ResetDeletionProtectionReason" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionReason"></a>

```go
func ResetDeletionProtectionReason()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPerformanceConfig` <a name="ResetPerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetPerformanceConfig"></a>

```go
func ResetPerformanceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFilestoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.GoogleFilestoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.GoogleFilestoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.GoogleFilestoreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.GoogleFilestoreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFilestoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFilestoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFilestoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFilestoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileShares">FileShares</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference">GoogleFilestoreInstanceFileSharesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList">GoogleFilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference">GoogleFilestoreInstancePerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference">GoogleFilestoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReasonInput">DeletionProtectionReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileSharesInput">FileSharesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfigInput">PerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReason">DeletionProtectionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileShares"></a>

```go
func FileShares() GoogleFilestoreInstanceFileSharesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference">GoogleFilestoreInstanceFileSharesOutputReference</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networks"></a>

```go
func Networks() GoogleFilestoreInstanceNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList">GoogleFilestoreInstanceNetworksList</a>

---

##### `PerformanceConfig`<sup>Required</sup> <a name="PerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfig"></a>

```go
func PerformanceConfig() GoogleFilestoreInstancePerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference">GoogleFilestoreInstancePerformanceConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeouts"></a>

```go
func Timeouts() GoogleFilestoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference">GoogleFilestoreInstanceTimeoutsOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionReasonInput`<sup>Optional</sup> <a name="DeletionProtectionReasonInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReasonInput"></a>

```go
func DeletionProtectionReasonInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FileSharesInput`<sup>Optional</sup> <a name="FileSharesInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileSharesInput"></a>

```go
func FileSharesInput() GoogleFilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceConfigInput`<sup>Optional</sup> <a name="PerformanceConfigInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfigInput"></a>

```go
func PerformanceConfigInput() GoogleFilestoreInstancePerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionReason`<sup>Required</sup> <a name="DeletionProtectionReason" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReason"></a>

```go
func DeletionProtectionReason() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFilestoreInstanceConfig <a name="GoogleFilestoreInstanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FileShares: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares,
	Name: *string,
	Networks: interface{},
	Tier: *string,
	DeletionProtectionEnabled: interface{},
	DeletionProtectionReason: *string,
	Description: *string,
	Id: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	Location: *string,
	PerformanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig,
	Project: *string,
	Protocol: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.fileShares">FileShares</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a></code> | file_shares block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tier">Tier</a></code> | <code>*string</code> | The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Indicates whether the instance is protected against deletion. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionReason">DeletionProtectionReason</a></code> | <code>*string</code> | The reason for enabling deletion protection. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.description">Description</a></code> | <code>*string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#id GoogleFilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#project GoogleFilestoreInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.zone">Zone</a></code> | <code>*string</code> | The name of the Filestore zone of the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.fileShares"></a>

```go
FileShares GoogleFilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

file_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#file_shares GoogleFilestoreInstance#file_shares}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#name GoogleFilestoreInstance#name}

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#networks GoogleFilestoreInstance#networks}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#tier GoogleFilestoreInstance#tier}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Indicates whether the instance is protected against deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#deletion_protection_enabled GoogleFilestoreInstance#deletion_protection_enabled}

---

##### `DeletionProtectionReason`<sup>Optional</sup> <a name="DeletionProtectionReason" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionReason"></a>

```go
DeletionProtectionReason *string
```

- *Type:* *string

The reason for enabling deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#deletion_protection_reason GoogleFilestoreInstance#deletion_protection_reason}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#description GoogleFilestoreInstance#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#id GoogleFilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#kms_key_name GoogleFilestoreInstance#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#labels GoogleFilestoreInstance#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#location GoogleFilestoreInstance#location}

---

##### `PerformanceConfig`<sup>Optional</sup> <a name="PerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.performanceConfig"></a>

```go
PerformanceConfig GoogleFilestoreInstancePerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#performance_config GoogleFilestoreInstance#performance_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#project GoogleFilestoreInstance#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#protocol GoogleFilestoreInstance#protocol}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A map of resource manager tags.

Resource manager tag keys
and values have the same definition as resource manager
tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456. The field is
ignored when empty. The field is immutable and causes
resource replacement when mutated. This field is only set
at create time and modifying this field after creation
will trigger recreation. To apply tags to an existing
resource, see the 'google_tags_tag_value' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#tags GoogleFilestoreInstance#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleFilestoreInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#timeouts GoogleFilestoreInstance#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#zone GoogleFilestoreInstance#zone}

---

### GoogleFilestoreInstanceFileShares <a name="GoogleFilestoreInstanceFileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceFileShares {
	CapacityGb: *f64,
	Name: *string,
	NfsExportOptions: interface{},
	SourceBackup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.capacityGb">CapacityGb</a></code> | <code>*f64</code> | File share capacity in GiB. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.name">Name</a></code> | <code>*string</code> | The name of the fileshare (16 characters or less). |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.nfsExportOptions">NfsExportOptions</a></code> | <code>interface{}</code> | nfs_export_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from. |

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.capacityGb"></a>

```go
CapacityGb *f64
```

- *Type:* *f64

File share capacity in GiB.

This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#capacity_gb GoogleFilestoreInstance#capacity_gb}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#name GoogleFilestoreInstance#name}

---

##### `NfsExportOptions`<sup>Optional</sup> <a name="NfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.nfsExportOptions"></a>

```go
NfsExportOptions interface{}
```

- *Type:* interface{}

nfs_export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#nfs_export_options GoogleFilestoreInstance#nfs_export_options}

---

##### `SourceBackup`<sup>Optional</sup> <a name="SourceBackup" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.sourceBackup"></a>

```go
SourceBackup *string
```

- *Type:* *string

The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#source_backup GoogleFilestoreInstance#source_backup}

---

### GoogleFilestoreInstanceFileSharesNfsExportOptions <a name="GoogleFilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceFileSharesNfsExportOptions {
	AccessMode: *string,
	AnonGid: *f64,
	AnonUid: *f64,
	IpRanges: *[]*string,
	SquashMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.accessMode">AccessMode</a></code> | <code>*string</code> | Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonGid">AnonGid</a></code> | <code>*f64</code> | An integer representing the anonymous group id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonUid">AnonUid</a></code> | <code>*f64</code> | An integer representing the anonymous user id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.ipRanges">IpRanges</a></code> | <code>*[]*string</code> | List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.squashMode">SquashMode</a></code> | <code>*string</code> | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. |

---

##### `AccessMode`<sup>Optional</sup> <a name="AccessMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.accessMode"></a>

```go
AccessMode *string
```

- *Type:* *string

Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests.

The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#access_mode GoogleFilestoreInstance#access_mode}

---

##### `AnonGid`<sup>Optional</sup> <a name="AnonGid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonGid"></a>

```go
AnonGid *f64
```

- *Type:* *f64

An integer representing the anonymous group id with a default value of 65534.

Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#anon_gid GoogleFilestoreInstance#anon_gid}

---

##### `AnonUid`<sup>Optional</sup> <a name="AnonUid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonUid"></a>

```go
AnonUid *f64
```

- *Type:* *f64

An integer representing the anonymous user id with a default value of 65534.

Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#anon_uid GoogleFilestoreInstance#anon_uid}

---

##### `IpRanges`<sup>Optional</sup> <a name="IpRanges" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.ipRanges"></a>

```go
IpRanges *[]*string
```

- *Type:* *[]*string

List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.

Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#ip_ranges GoogleFilestoreInstance#ip_ranges}

---

##### `SquashMode`<sup>Optional</sup> <a name="SquashMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.squashMode"></a>

```go
SquashMode *string
```

- *Type:* *string

Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access.

The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#squash_mode GoogleFilestoreInstance#squash_mode}

---

### GoogleFilestoreInstanceNetworks <a name="GoogleFilestoreInstanceNetworks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceNetworks {
	Modes: *[]*string,
	Network: *string,
	ConnectMode: *string,
	ReservedIpRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.modes">Modes</a></code> | <code>*[]*string</code> | IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.network">Network</a></code> | <code>*string</code> | The name of the GCE VPC network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.connectMode">ConnectMode</a></code> | <code>*string</code> | The network connect mode of the Filestore instance. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | A /29 CIDR block that identifies the range of IP addresses reserved for this instance. |

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.modes"></a>

```go
Modes *[]*string
```

- *Type:* *[]*string

IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#modes GoogleFilestoreInstance#modes}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the GCE VPC network to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#network GoogleFilestoreInstance#network}

---

##### `ConnectMode`<sup>Optional</sup> <a name="ConnectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.connectMode"></a>

```go
ConnectMode *string
```

- *Type:* *string

The network connect mode of the Filestore instance.

If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#connect_mode GoogleFilestoreInstance#connect_mode}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.reservedIpRange"></a>

```go
ReservedIpRange *string
```

- *Type:* *string

A /29 CIDR block that identifies the range of IP addresses reserved for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#reserved_ip_range GoogleFilestoreInstance#reserved_ip_range}

---

### GoogleFilestoreInstancePerformanceConfig <a name="GoogleFilestoreInstancePerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstancePerformanceConfig {
	FixedIops: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops,
	IopsPerTb: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.fixedIops">FixedIops</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a></code> | fixed_iops block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.iopsPerTb">IopsPerTb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a></code> | iops_per_tb block. |

---

##### `FixedIops`<sup>Optional</sup> <a name="FixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.fixedIops"></a>

```go
FixedIops GoogleFilestoreInstancePerformanceConfigFixedIops
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

fixed_iops block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#fixed_iops GoogleFilestoreInstance#fixed_iops}

---

##### `IopsPerTb`<sup>Optional</sup> <a name="IopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.iopsPerTb"></a>

```go
IopsPerTb GoogleFilestoreInstancePerformanceConfigIopsPerTb
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

iops_per_tb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#iops_per_tb GoogleFilestoreInstance#iops_per_tb}

---

### GoogleFilestoreInstancePerformanceConfigFixedIops <a name="GoogleFilestoreInstancePerformanceConfigFixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstancePerformanceConfigFixedIops {
	MaxIops: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops.property.maxIops">MaxIops</a></code> | <code>*f64</code> | The number of IOPS to provision for the instance. max_iops must be in multiple of 1000. |

---

##### `MaxIops`<sup>Optional</sup> <a name="MaxIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops.property.maxIops"></a>

```go
MaxIops *f64
```

- *Type:* *f64

The number of IOPS to provision for the instance. max_iops must be in multiple of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#max_iops GoogleFilestoreInstance#max_iops}

---

### GoogleFilestoreInstancePerformanceConfigIopsPerTb <a name="GoogleFilestoreInstancePerformanceConfigIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb {
	MaxIopsPerTb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb">MaxIopsPerTb</a></code> | <code>*f64</code> | The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000. |

---

##### `MaxIopsPerTb`<sup>Optional</sup> <a name="MaxIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb.property.maxIopsPerTb"></a>

```go
MaxIopsPerTb *f64
```

- *Type:* *f64

The instance max IOPS will be calculated by multiplying the capacity of the instance (TB) by max_iops_per_tb, and rounding to the nearest 1000.

The instance max IOPS
will be changed dynamically based on the instance
capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#max_iops_per_tb GoogleFilestoreInstance#max_iops_per_tb}

---

### GoogleFilestoreInstanceTimeouts <a name="GoogleFilestoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#create GoogleFilestoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#delete GoogleFilestoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#update GoogleFilestoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#create GoogleFilestoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#delete GoogleFilestoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_filestore_instance#update GoogleFilestoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFilestoreInstanceFileSharesNfsExportOptionsList <a name="GoogleFilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceFileSharesNfsExportOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFilestoreInstanceFileSharesNfsExportOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```go
func Get(index *f64) GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode">ResetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid">ResetAnonGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid">ResetAnonUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges">ResetIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode">ResetSquashMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessMode` <a name="ResetAccessMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode"></a>

```go
func ResetAccessMode()
```

##### `ResetAnonGid` <a name="ResetAnonGid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid"></a>

```go
func ResetAnonGid()
```

##### `ResetAnonUid` <a name="ResetAnonUid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid"></a>

```go
func ResetAnonUid()
```

##### `ResetIpRanges` <a name="ResetIpRanges" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges"></a>

```go
func ResetIpRanges()
```

##### `ResetSquashMode` <a name="ResetSquashMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode"></a>

```go
func ResetSquashMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput">AnonGidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput">AnonUidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput">IpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput">SquashModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">AnonGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">AnonUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">IpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">SquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput"></a>

```go
func AccessModeInput() *string
```

- *Type:* *string

---

##### `AnonGidInput`<sup>Optional</sup> <a name="AnonGidInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput"></a>

```go
func AnonGidInput() *f64
```

- *Type:* *f64

---

##### `AnonUidInput`<sup>Optional</sup> <a name="AnonUidInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput"></a>

```go
func AnonUidInput() *f64
```

- *Type:* *f64

---

##### `IpRangesInput`<sup>Optional</sup> <a name="IpRangesInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput"></a>

```go
func IpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SquashModeInput`<sup>Optional</sup> <a name="SquashModeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput"></a>

```go
func SquashModeInput() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AnonGid`<sup>Required</sup> <a name="AnonGid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```go
func AnonGid() *f64
```

- *Type:* *f64

---

##### `AnonUid`<sup>Required</sup> <a name="AnonUid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```go
func AnonUid() *f64
```

- *Type:* *f64

---

##### `IpRanges`<sup>Required</sup> <a name="IpRanges" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```go
func IpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```go
func SquashMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFilestoreInstanceFileSharesOutputReference <a name="GoogleFilestoreInstanceFileSharesOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceFileSharesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstanceFileSharesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.putNfsExportOptions">PutNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetNfsExportOptions">ResetNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetSourceBackup">ResetSourceBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfsExportOptions` <a name="PutNfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.putNfsExportOptions"></a>

```go
func PutNfsExportOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.putNfsExportOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNfsExportOptions` <a name="ResetNfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetNfsExportOptions"></a>

```go
func ResetNfsExportOptions()
```

##### `ResetSourceBackup` <a name="ResetSourceBackup" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.resetSourceBackup"></a>

```go
func ResetSourceBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">NfsExportOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList">GoogleFilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGbInput">CapacityGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput">NfsExportOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackupInput">SourceBackupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NfsExportOptions`<sup>Required</sup> <a name="NfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```go
func NfsExportOptions() GoogleFilestoreInstanceFileSharesNfsExportOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList">GoogleFilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `CapacityGbInput`<sup>Optional</sup> <a name="CapacityGbInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGbInput"></a>

```go
func CapacityGbInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsExportOptionsInput`<sup>Optional</sup> <a name="NfsExportOptionsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput"></a>

```go
func NfsExportOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceBackupInput`<sup>Optional</sup> <a name="SourceBackupInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackupInput"></a>

```go
func SourceBackupInput() *string
```

- *Type:* *string

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```go
func CapacityGb() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```go
func SourceBackup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

---


### GoogleFilestoreInstanceNetworksList <a name="GoogleFilestoreInstanceNetworksList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFilestoreInstanceNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.get"></a>

```go
func Get(index *f64) GoogleFilestoreInstanceNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFilestoreInstanceNetworksOutputReference <a name="GoogleFilestoreInstanceNetworksOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFilestoreInstanceNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetConnectMode">ResetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetReservedIpRange">ResetReservedIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectMode` <a name="ResetConnectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetConnectMode"></a>

```go
func ResetConnectMode()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetReservedIpRange"></a>

```go
func ResetReservedIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectModeInput">ConnectModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modesInput">ModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectMode">ConnectMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modes">Modes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectModeInput`<sup>Optional</sup> <a name="ConnectModeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectModeInput"></a>

```go
func ConnectModeInput() *string
```

- *Type:* *string

---

##### `ModesInput`<sup>Optional</sup> <a name="ModesInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modesInput"></a>

```go
func ModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput"></a>

```go
func ReservedIpRangeInput() *string
```

- *Type:* *string

---

##### `ConnectMode`<sup>Required</sup> <a name="ConnectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```go
func ConnectMode() *string
```

- *Type:* *string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modes"></a>

```go
func Modes() *[]*string
```

- *Type:* *[]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```go
func ReservedIpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference <a name="GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops">ResetMaxIops</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxIops` <a name="ResetMaxIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resetMaxIops"></a>

```go
func ResetMaxIops()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput">MaxIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops">MaxIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxIopsInput`<sup>Optional</sup> <a name="MaxIopsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIopsInput"></a>

```go
func MaxIopsInput() *f64
```

- *Type:* *f64

---

##### `MaxIops`<sup>Required</sup> <a name="MaxIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops"></a>

```go
func MaxIops() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstancePerformanceConfigFixedIops
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

---


### GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference <a name="GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb">ResetMaxIopsPerTb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxIopsPerTb` <a name="ResetMaxIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resetMaxIopsPerTb"></a>

```go
func ResetMaxIopsPerTb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput">MaxIopsPerTbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb">MaxIopsPerTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxIopsPerTbInput`<sup>Optional</sup> <a name="MaxIopsPerTbInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTbInput"></a>

```go
func MaxIopsPerTbInput() *f64
```

- *Type:* *f64

---

##### `MaxIopsPerTb`<sup>Required</sup> <a name="MaxIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb"></a>

```go
func MaxIopsPerTb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstancePerformanceConfigIopsPerTb
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

---


### GoogleFilestoreInstancePerformanceConfigOutputReference <a name="GoogleFilestoreInstancePerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstancePerformanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstancePerformanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putFixedIops">PutFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putIopsPerTb">PutIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetFixedIops">ResetFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb">ResetIopsPerTb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedIops` <a name="PutFixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putFixedIops"></a>

```go
func PutFixedIops(value GoogleFilestoreInstancePerformanceConfigFixedIops)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putFixedIops.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

---

##### `PutIopsPerTb` <a name="PutIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putIopsPerTb"></a>

```go
func PutIopsPerTb(value GoogleFilestoreInstancePerformanceConfigIopsPerTb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.putIopsPerTb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `ResetFixedIops` <a name="ResetFixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetFixedIops"></a>

```go
func ResetFixedIops()
```

##### `ResetIopsPerTb` <a name="ResetIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.resetIopsPerTb"></a>

```go
func ResetIopsPerTb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIops">FixedIops</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference">GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb">IopsPerTb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference">GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput">FixedIopsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput">IopsPerTbInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedIops`<sup>Required</sup> <a name="FixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIops"></a>

```go
func FixedIops() GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference">GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference</a>

---

##### `IopsPerTb`<sup>Required</sup> <a name="IopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb"></a>

```go
func IopsPerTb() GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference">GoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference</a>

---

##### `FixedIopsInput`<sup>Optional</sup> <a name="FixedIopsInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIopsInput"></a>

```go
func FixedIopsInput() GoogleFilestoreInstancePerformanceConfigFixedIops
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops">GoogleFilestoreInstancePerformanceConfigFixedIops</a>

---

##### `IopsPerTbInput`<sup>Optional</sup> <a name="IopsPerTbInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTbInput"></a>

```go
func IopsPerTbInput() GoogleFilestoreInstancePerformanceConfigIopsPerTb
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstancePerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

---


### GoogleFilestoreInstanceTimeoutsOutputReference <a name="GoogleFilestoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



