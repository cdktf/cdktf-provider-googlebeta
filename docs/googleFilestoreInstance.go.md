# `googleFilestoreInstance` Submodule <a name="`googleFilestoreInstance` Submodule" id="@cdktf/provider-google-beta.googleFilestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFilestoreInstance <a name="GoogleFilestoreInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putDirectoryServices">PutDirectoryServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares">PutFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putInitialReplication">PutInitialReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putPerformanceConfig">PutPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDeletionProtectionReason">ResetDeletionProtectionReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDirectoryServices">ResetDirectoryServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetInitialReplication">ResetInitialReplication</a></code> | *No description.* |
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

##### `PutDirectoryServices` <a name="PutDirectoryServices" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putDirectoryServices"></a>

```go
func PutDirectoryServices(value GoogleFilestoreInstanceDirectoryServices)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putDirectoryServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices">GoogleFilestoreInstanceDirectoryServices</a>

---

##### `PutFileShares` <a name="PutFileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares"></a>

```go
func PutFileShares(value GoogleFilestoreInstanceFileShares)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putFileShares.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a>

---

##### `PutInitialReplication` <a name="PutInitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putInitialReplication"></a>

```go
func PutInitialReplication(value GoogleFilestoreInstanceInitialReplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.putInitialReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

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

##### `ResetDirectoryServices` <a name="ResetDirectoryServices" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetDirectoryServices"></a>

```go
func ResetDirectoryServices()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialReplication` <a name="ResetInitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.resetInitialReplication"></a>

```go
func ResetInitialReplication()
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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.GoogleFilestoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.GoogleFilestoreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.directoryServices">DirectoryServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference">GoogleFilestoreInstanceDirectoryServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveReplication">EffectiveReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList">GoogleFilestoreInstanceEffectiveReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileShares">FileShares</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesOutputReference">GoogleFilestoreInstanceFileSharesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplication">InitialReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference">GoogleFilestoreInstanceInitialReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList">GoogleFilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigOutputReference">GoogleFilestoreInstancePerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeoutsOutputReference">GoogleFilestoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.deletionProtectionReasonInput">DeletionProtectionReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.directoryServicesInput">DirectoryServicesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices">GoogleFilestoreInstanceDirectoryServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.fileSharesInput">FileSharesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares">GoogleFilestoreInstanceFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplicationInput">InitialReplicationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a></code> | *No description.* |
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

##### `DirectoryServices`<sup>Required</sup> <a name="DirectoryServices" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.directoryServices"></a>

```go
func DirectoryServices() GoogleFilestoreInstanceDirectoryServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference">GoogleFilestoreInstanceDirectoryServicesOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveReplication`<sup>Required</sup> <a name="EffectiveReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.effectiveReplication"></a>

```go
func EffectiveReplication() GoogleFilestoreInstanceEffectiveReplicationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList">GoogleFilestoreInstanceEffectiveReplicationList</a>

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

##### `InitialReplication`<sup>Required</sup> <a name="InitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplication"></a>

```go
func InitialReplication() GoogleFilestoreInstanceInitialReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference">GoogleFilestoreInstanceInitialReplicationOutputReference</a>

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

##### `DirectoryServicesInput`<sup>Optional</sup> <a name="DirectoryServicesInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.directoryServicesInput"></a>

```go
func DirectoryServicesInput() GoogleFilestoreInstanceDirectoryServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices">GoogleFilestoreInstanceDirectoryServices</a>

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

##### `InitialReplicationInput`<sup>Optional</sup> <a name="InitialReplicationInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstance.property.initialReplicationInput"></a>

```go
func InitialReplicationInput() GoogleFilestoreInstanceInitialReplication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FileShares: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstanceFileShares,
	Name: *string,
	Networks: interface{},
	Tier: *string,
	DeletionProtectionEnabled: interface{},
	DeletionProtectionReason: *string,
	Description: *string,
	DirectoryServices: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices,
	Id: *string,
	InitialReplication: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	Location: *string,
	PerformanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig,
	Project: *string,
	Protocol: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts,
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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.directoryServices">DirectoryServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices">GoogleFilestoreInstanceDirectoryServices</a></code> | directory_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#id GoogleFilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.initialReplication">InitialReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a></code> | initial_replication block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#project GoogleFilestoreInstance#project}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#file_shares GoogleFilestoreInstance#file_shares}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#name GoogleFilestoreInstance#name}

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#networks GoogleFilestoreInstance#networks}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#tier GoogleFilestoreInstance#tier}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Indicates whether the instance is protected against deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#deletion_protection_enabled GoogleFilestoreInstance#deletion_protection_enabled}

---

##### `DeletionProtectionReason`<sup>Optional</sup> <a name="DeletionProtectionReason" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.deletionProtectionReason"></a>

```go
DeletionProtectionReason *string
```

- *Type:* *string

The reason for enabling deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#deletion_protection_reason GoogleFilestoreInstance#deletion_protection_reason}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#description GoogleFilestoreInstance#description}

---

##### `DirectoryServices`<sup>Optional</sup> <a name="DirectoryServices" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.directoryServices"></a>

```go
DirectoryServices GoogleFilestoreInstanceDirectoryServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices">GoogleFilestoreInstanceDirectoryServices</a>

directory_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#directory_services GoogleFilestoreInstance#directory_services}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#id GoogleFilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialReplication`<sup>Optional</sup> <a name="InitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.initialReplication"></a>

```go
InitialReplication GoogleFilestoreInstanceInitialReplication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

initial_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#initial_replication GoogleFilestoreInstance#initial_replication}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#kms_key_name GoogleFilestoreInstance#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#labels GoogleFilestoreInstance#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#location GoogleFilestoreInstance#location}

---

##### `PerformanceConfig`<sup>Optional</sup> <a name="PerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.performanceConfig"></a>

```go
PerformanceConfig GoogleFilestoreInstancePerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig">GoogleFilestoreInstancePerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#performance_config GoogleFilestoreInstance#performance_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#project GoogleFilestoreInstance#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value: "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#protocol GoogleFilestoreInstance#protocol}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#tags GoogleFilestoreInstance#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleFilestoreInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts">GoogleFilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#timeouts GoogleFilestoreInstance#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#zone GoogleFilestoreInstance#zone}

---

### GoogleFilestoreInstanceDirectoryServices <a name="GoogleFilestoreInstanceDirectoryServices" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceDirectoryServices {
	Ldap: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices.property.ldap">Ldap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap">GoogleFilestoreInstanceDirectoryServicesLdap</a></code> | ldap block. |

---

##### `Ldap`<sup>Optional</sup> <a name="Ldap" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices.property.ldap"></a>

```go
Ldap GoogleFilestoreInstanceDirectoryServicesLdap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap">GoogleFilestoreInstanceDirectoryServicesLdap</a>

ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#ldap GoogleFilestoreInstance#ldap}

---

### GoogleFilestoreInstanceDirectoryServicesLdap <a name="GoogleFilestoreInstanceDirectoryServicesLdap" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceDirectoryServicesLdap {
	Domain: *string,
	Servers: *[]*string,
	GroupsOu: *string,
	UsersOu: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.domain">Domain</a></code> | <code>*string</code> | The LDAP domain name in the format of 'my-domain.com'. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.servers">Servers</a></code> | <code>*[]*string</code> | The servers names are used for specifying the LDAP servers names. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.groupsOu">GroupsOu</a></code> | <code>*string</code> | The groups Organizational Unit (OU) is optional. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.usersOu">UsersOu</a></code> | <code>*string</code> | The users Organizational Unit (OU) is optional. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The LDAP domain name in the format of 'my-domain.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#domain GoogleFilestoreInstance#domain}

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.servers"></a>

```go
Servers *[]*string
```

- *Type:* *[]*string

The servers names are used for specifying the LDAP servers names.

The LDAP servers names can come with two formats:

1. DNS name, for example: 'ldap.example1.com', 'ldap.example2.com'.
2. IP address, for example: '10.0.0.1', '10.0.0.2', '10.0.0.3'.
   All servers names must be in the same format: either all DNS names or all
   IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#servers GoogleFilestoreInstance#servers}

---

##### `GroupsOu`<sup>Optional</sup> <a name="GroupsOu" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.groupsOu"></a>

```go
GroupsOu *string
```

- *Type:* *string

The groups Organizational Unit (OU) is optional.

This parameter is a hint
to allow faster lookup in the LDAP namespace. In case that this parameter
is not provided, Filestore instance will query the whole LDAP namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#groups_ou GoogleFilestoreInstance#groups_ou}

---

##### `UsersOu`<sup>Optional</sup> <a name="UsersOu" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap.property.usersOu"></a>

```go
UsersOu *string
```

- *Type:* *string

The users Organizational Unit (OU) is optional.

This parameter is a hint
to allow faster lookup in the LDAP namespace. In case that this parameter
is not provided, Filestore instance will query the whole LDAP namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#users_ou GoogleFilestoreInstance#users_ou}

---

### GoogleFilestoreInstanceEffectiveReplication <a name="GoogleFilestoreInstanceEffectiveReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceEffectiveReplication {

}
```


### GoogleFilestoreInstanceEffectiveReplicationReplicas <a name="GoogleFilestoreInstanceEffectiveReplicationReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceEffectiveReplicationReplicas {

}
```


### GoogleFilestoreInstanceFileShares <a name="GoogleFilestoreInstanceFileShares" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#capacity_gb GoogleFilestoreInstance#capacity_gb}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#name GoogleFilestoreInstance#name}

---

##### `NfsExportOptions`<sup>Optional</sup> <a name="NfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.nfsExportOptions"></a>

```go
NfsExportOptions interface{}
```

- *Type:* interface{}

nfs_export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#nfs_export_options GoogleFilestoreInstance#nfs_export_options}

---

##### `SourceBackup`<sup>Optional</sup> <a name="SourceBackup" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileShares.property.sourceBackup"></a>

```go
SourceBackup *string
```

- *Type:* *string

The resource name of the backup, in the format projects/{projectId}/locations/{locationId}/backups/{backupId}, that this file share has been restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#source_backup GoogleFilestoreInstance#source_backup}

---

### GoogleFilestoreInstanceFileSharesNfsExportOptions <a name="GoogleFilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceFileSharesNfsExportOptions {
	AccessMode: *string,
	AnonGid: *f64,
	AnonUid: *f64,
	IpRanges: *[]*string,
	Network: *string,
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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.network">Network</a></code> | <code>*string</code> | The source VPC network for 'ip_ranges'. Required for instances using Private Service Connect, optional otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.squashMode">SquashMode</a></code> | <code>*string</code> | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. |

---

##### `AccessMode`<sup>Optional</sup> <a name="AccessMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.accessMode"></a>

```go
AccessMode *string
```

- *Type:* *string

Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests.

The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#access_mode GoogleFilestoreInstance#access_mode}

---

##### `AnonGid`<sup>Optional</sup> <a name="AnonGid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonGid"></a>

```go
AnonGid *f64
```

- *Type:* *f64

An integer representing the anonymous group id with a default value of 65534.

Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#anon_gid GoogleFilestoreInstance#anon_gid}

---

##### `AnonUid`<sup>Optional</sup> <a name="AnonUid" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.anonUid"></a>

```go
AnonUid *f64
```

- *Type:* *f64

An integer representing the anonymous user id with a default value of 65534.

Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#anon_uid GoogleFilestoreInstance#anon_uid}

---

##### `IpRanges`<sup>Optional</sup> <a name="IpRanges" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.ipRanges"></a>

```go
IpRanges *[]*string
```

- *Type:* *[]*string

List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.

Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#ip_ranges GoogleFilestoreInstance#ip_ranges}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.network"></a>

```go
Network *string
```

- *Type:* *string

The source VPC network for 'ip_ranges'. Required for instances using Private Service Connect, optional otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#network GoogleFilestoreInstance#network}

---

##### `SquashMode`<sup>Optional</sup> <a name="SquashMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptions.property.squashMode"></a>

```go
SquashMode *string
```

- *Type:* *string

Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access.

The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#squash_mode GoogleFilestoreInstance#squash_mode}

---

### GoogleFilestoreInstanceInitialReplication <a name="GoogleFilestoreInstanceInitialReplication" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceInitialReplication {
	Replicas: interface{},
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.replicas">Replicas</a></code> | <code>interface{}</code> | replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.role">Role</a></code> | <code>*string</code> | The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"]. |

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.replicas"></a>

```go
Replicas interface{}
```

- *Type:* interface{}

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#replicas GoogleFilestoreInstance#replicas}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication.property.role"></a>

```go
Role *string
```

- *Type:* *string

The replication role. Default value: "STANDBY" Possible values: ["ROLE_UNSPECIFIED", "ACTIVE", "STANDBY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#role GoogleFilestoreInstance#role}

---

### GoogleFilestoreInstanceInitialReplicationReplicas <a name="GoogleFilestoreInstanceInitialReplicationReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceInitialReplicationReplicas {
	PeerInstance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas.property.peerInstance">PeerInstance</a></code> | <code>*string</code> | The peer instance. |

---

##### `PeerInstance`<sup>Required</sup> <a name="PeerInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicas.property.peerInstance"></a>

```go
PeerInstance *string
```

- *Type:* *string

The peer instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#peer_instance GoogleFilestoreInstance#peer_instance}

---

### GoogleFilestoreInstanceNetworks <a name="GoogleFilestoreInstanceNetworks" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceNetworks {
	Modes: *[]*string,
	Network: *string,
	ConnectMode: *string,
	PscConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig,
	ReservedIpRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.modes">Modes</a></code> | <code>*[]*string</code> | IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.network">Network</a></code> | <code>*string</code> | The name of the GCE VPC network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.connectMode">ConnectMode</a></code> | <code>*string</code> | The network connect mode of the Filestore instance. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig">GoogleFilestoreInstanceNetworksPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | A /29 CIDR block that identifies the range of IP addresses reserved for this instance. |

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.modes"></a>

```go
Modes *[]*string
```

- *Type:* *[]*string

IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#modes GoogleFilestoreInstance#modes}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the GCE VPC network to which the instance is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#network GoogleFilestoreInstance#network}

---

##### `ConnectMode`<sup>Optional</sup> <a name="ConnectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.connectMode"></a>

```go
ConnectMode *string
```

- *Type:* *string

The network connect mode of the Filestore instance.

If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS", "PRIVATE_SERVICE_CONNECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#connect_mode GoogleFilestoreInstance#connect_mode}

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.pscConfig"></a>

```go
PscConfig GoogleFilestoreInstanceNetworksPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig">GoogleFilestoreInstanceNetworksPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#psc_config GoogleFilestoreInstance#psc_config}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworks.property.reservedIpRange"></a>

```go
ReservedIpRange *string
```

- *Type:* *string

A /29 CIDR block that identifies the range of IP addresses reserved for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#reserved_ip_range GoogleFilestoreInstance#reserved_ip_range}

---

### GoogleFilestoreInstanceNetworksPscConfig <a name="GoogleFilestoreInstanceNetworksPscConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceNetworksPscConfig {
	EndpointProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig.property.endpointProject">EndpointProject</a></code> | <code>*string</code> | Consumer service project in which the Private Service Connect endpoint would be set up. |

---

##### `EndpointProject`<sup>Optional</sup> <a name="EndpointProject" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig.property.endpointProject"></a>

```go
EndpointProject *string
```

- *Type:* *string

Consumer service project in which the Private Service Connect endpoint would be set up.

This is optional, and only relevant in case the network
is a shared VPC. If this is not specified, the endpoint would be set up
in the VPC host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#endpoint_project GoogleFilestoreInstance#endpoint_project}

---

### GoogleFilestoreInstancePerformanceConfig <a name="GoogleFilestoreInstancePerformanceConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstancePerformanceConfig {
	FixedIops: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops,
	IopsPerTb: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb,
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#fixed_iops GoogleFilestoreInstance#fixed_iops}

---

##### `IopsPerTb`<sup>Optional</sup> <a name="IopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfig.property.iopsPerTb"></a>

```go
IopsPerTb GoogleFilestoreInstancePerformanceConfigIopsPerTb
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb">GoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

iops_per_tb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#iops_per_tb GoogleFilestoreInstance#iops_per_tb}

---

### GoogleFilestoreInstancePerformanceConfigFixedIops <a name="GoogleFilestoreInstancePerformanceConfigFixedIops" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIops.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#max_iops GoogleFilestoreInstance#max_iops}

---

### GoogleFilestoreInstancePerformanceConfigIopsPerTb <a name="GoogleFilestoreInstancePerformanceConfigIopsPerTb" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigIopsPerTb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#max_iops_per_tb GoogleFilestoreInstance#max_iops_per_tb}

---

### GoogleFilestoreInstanceTimeouts <a name="GoogleFilestoreInstanceTimeouts" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

&googlefilestoreinstance.GoogleFilestoreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#create GoogleFilestoreInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#delete GoogleFilestoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#update GoogleFilestoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#create GoogleFilestoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#delete GoogleFilestoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_filestore_instance#update GoogleFilestoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFilestoreInstanceDirectoryServicesLdapOutputReference <a name="GoogleFilestoreInstanceDirectoryServicesLdapOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceDirectoryServicesLdapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstanceDirectoryServicesLdapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.resetGroupsOu">ResetGroupsOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.resetUsersOu">ResetUsersOu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupsOu` <a name="ResetGroupsOu" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.resetGroupsOu"></a>

```go
func ResetGroupsOu()
```

##### `ResetUsersOu` <a name="ResetUsersOu" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.resetUsersOu"></a>

```go
func ResetUsersOu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOuInput">GroupsOuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.serversInput">ServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOuInput">UsersOuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOu">GroupsOu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.servers">Servers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOu">UsersOu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap">GoogleFilestoreInstanceDirectoryServicesLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `GroupsOuInput`<sup>Optional</sup> <a name="GroupsOuInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOuInput"></a>

```go
func GroupsOuInput() *string
```

- *Type:* *string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.serversInput"></a>

```go
func ServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsersOuInput`<sup>Optional</sup> <a name="UsersOuInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOuInput"></a>

```go
func UsersOuInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `GroupsOu`<sup>Required</sup> <a name="GroupsOu" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.groupsOu"></a>

```go
func GroupsOu() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.servers"></a>

```go
func Servers() *[]*string
```

- *Type:* *[]*string

---

##### `UsersOu`<sup>Required</sup> <a name="UsersOu" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.usersOu"></a>

```go
func UsersOu() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstanceDirectoryServicesLdap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap">GoogleFilestoreInstanceDirectoryServicesLdap</a>

---


### GoogleFilestoreInstanceDirectoryServicesOutputReference <a name="GoogleFilestoreInstanceDirectoryServicesOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceDirectoryServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstanceDirectoryServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.putLdap">PutLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.resetLdap">ResetLdap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLdap` <a name="PutLdap" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.putLdap"></a>

```go
func PutLdap(value GoogleFilestoreInstanceDirectoryServicesLdap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.putLdap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap">GoogleFilestoreInstanceDirectoryServicesLdap</a>

---

##### `ResetLdap` <a name="ResetLdap" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.resetLdap"></a>

```go
func ResetLdap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.ldap">Ldap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference">GoogleFilestoreInstanceDirectoryServicesLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.ldapInput">LdapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap">GoogleFilestoreInstanceDirectoryServicesLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices">GoogleFilestoreInstanceDirectoryServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ldap`<sup>Required</sup> <a name="Ldap" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.ldap"></a>

```go
func Ldap() GoogleFilestoreInstanceDirectoryServicesLdapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdapOutputReference">GoogleFilestoreInstanceDirectoryServicesLdapOutputReference</a>

---

##### `LdapInput`<sup>Optional</sup> <a name="LdapInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.ldapInput"></a>

```go
func LdapInput() GoogleFilestoreInstanceDirectoryServicesLdap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesLdap">GoogleFilestoreInstanceDirectoryServicesLdap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstanceDirectoryServices
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceDirectoryServices">GoogleFilestoreInstanceDirectoryServices</a>

---


### GoogleFilestoreInstanceEffectiveReplicationList <a name="GoogleFilestoreInstanceEffectiveReplicationList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceEffectiveReplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFilestoreInstanceEffectiveReplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.get"></a>

```go
func Get(index *f64) GoogleFilestoreInstanceEffectiveReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleFilestoreInstanceEffectiveReplicationOutputReference <a name="GoogleFilestoreInstanceEffectiveReplicationOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceEffectiveReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFilestoreInstanceEffectiveReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList">GoogleFilestoreInstanceEffectiveReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication">GoogleFilestoreInstanceEffectiveReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.replicas"></a>

```go
func Replicas() GoogleFilestoreInstanceEffectiveReplicationReplicasList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList">GoogleFilestoreInstanceEffectiveReplicationReplicasList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstanceEffectiveReplication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplication">GoogleFilestoreInstanceEffectiveReplication</a>

---


### GoogleFilestoreInstanceEffectiveReplicationReplicasList <a name="GoogleFilestoreInstanceEffectiveReplicationReplicasList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceEffectiveReplicationReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFilestoreInstanceEffectiveReplicationReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.get"></a>

```go
func Get(index *f64) GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference <a name="GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime">LastActiveSyncTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.peerInstance">PeerInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons">StateReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas">GoogleFilestoreInstanceEffectiveReplicationReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastActiveSyncTime`<sup>Required</sup> <a name="LastActiveSyncTime" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime"></a>

```go
func LastActiveSyncTime() *string
```

- *Type:* *string

---

##### `PeerInstance`<sup>Required</sup> <a name="PeerInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.peerInstance"></a>

```go
func PeerInstance() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReasons`<sup>Required</sup> <a name="StateReasons" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons"></a>

```go
func StateReasons() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstanceEffectiveReplicationReplicas
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceEffectiveReplicationReplicas">GoogleFilestoreInstanceEffectiveReplicationReplicas</a>

---


### GoogleFilestoreInstanceFileSharesNfsExportOptionsList <a name="GoogleFilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
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

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput">SquashModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">AnonGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">AnonUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">IpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
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

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

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

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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


### GoogleFilestoreInstanceInitialReplicationOutputReference <a name="GoogleFilestoreInstanceInitialReplicationOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceInitialReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstanceInitialReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.putReplicas">PutReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReplicas` <a name="PutReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.putReplicas"></a>

```go
func PutReplicas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.putReplicas.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetReplicas"></a>

```go
func ResetReplicas()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList">GoogleFilestoreInstanceInitialReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicas"></a>

```go
func Replicas() GoogleFilestoreInstanceInitialReplicationReplicasList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList">GoogleFilestoreInstanceInitialReplicationReplicasList</a>

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstanceInitialReplication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplication">GoogleFilestoreInstanceInitialReplication</a>

---


### GoogleFilestoreInstanceInitialReplicationReplicasList <a name="GoogleFilestoreInstanceInitialReplicationReplicasList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceInitialReplicationReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFilestoreInstanceInitialReplicationReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.get"></a>

```go
func Get(index *f64) GoogleFilestoreInstanceInitialReplicationReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFilestoreInstanceInitialReplicationReplicasOutputReference <a name="GoogleFilestoreInstanceInitialReplicationReplicasOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceInitialReplicationReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFilestoreInstanceInitialReplicationReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput">PeerInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance">PeerInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeerInstanceInput`<sup>Optional</sup> <a name="PeerInstanceInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstanceInput"></a>

```go
func PeerInstanceInput() *string
```

- *Type:* *string

---

##### `PeerInstance`<sup>Required</sup> <a name="PeerInstance" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance"></a>

```go
func PeerInstance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFilestoreInstanceNetworksList <a name="GoogleFilestoreInstanceNetworksList" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetConnectMode">ResetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
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

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.putPscConfig"></a>

```go
func PutPscConfig(value GoogleFilestoreInstanceNetworksPscConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig">GoogleFilestoreInstanceNetworksPscConfig</a>

---

##### `ResetConnectMode` <a name="ResetConnectMode" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetConnectMode"></a>

```go
func ResetConnectMode()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.resetPscConfig"></a>

```go
func ResetPscConfig()
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
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference">GoogleFilestoreInstanceNetworksPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.connectModeInput">ConnectModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.modesInput">ModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.pscConfigInput">PscConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig">GoogleFilestoreInstanceNetworksPscConfig</a></code> | *No description.* |
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

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.pscConfig"></a>

```go
func PscConfig() GoogleFilestoreInstanceNetworksPscConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference">GoogleFilestoreInstanceNetworksPscConfigOutputReference</a>

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

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksOutputReference.property.pscConfigInput"></a>

```go
func PscConfigInput() GoogleFilestoreInstanceNetworksPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig">GoogleFilestoreInstanceNetworksPscConfig</a>

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


### GoogleFilestoreInstanceNetworksPscConfigOutputReference <a name="GoogleFilestoreInstanceNetworksPscConfigOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

googlefilestoreinstance.NewGoogleFilestoreInstanceNetworksPscConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFilestoreInstanceNetworksPscConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.resetEndpointProject">ResetEndpointProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointProject` <a name="ResetEndpointProject" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.resetEndpointProject"></a>

```go
func ResetEndpointProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.endpointProjectInput">EndpointProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.endpointProject">EndpointProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig">GoogleFilestoreInstanceNetworksPscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointProjectInput`<sup>Optional</sup> <a name="EndpointProjectInput" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.endpointProjectInput"></a>

```go
func EndpointProjectInput() *string
```

- *Type:* *string

---

##### `EndpointProject`<sup>Required</sup> <a name="EndpointProject" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.endpointProject"></a>

```go
func EndpointProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFilestoreInstanceNetworksPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstanceNetworksPscConfig">GoogleFilestoreInstanceNetworksPscConfig</a>

---


### GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference <a name="GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFilestoreInstance.GoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlefilestoreinstance"

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



