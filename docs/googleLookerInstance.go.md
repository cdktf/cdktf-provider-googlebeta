# `googleLookerInstance` Submodule <a name="`googleLookerInstance` Submodule" id="@cdktf/provider-google-beta.googleLookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLookerInstance <a name="GoogleLookerInstance" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstance(scope Construct, id *string, config GoogleLookerInstanceConfig) GoogleLookerInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig">GoogleLookerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig">GoogleLookerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings">PutAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain">PutCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod">PutDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata">PutUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings">ResetAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork">ResetConsumerNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetCustomDomain">ResetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod">ResetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition">ResetPlatformEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled">ResetPrivateIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscEnabled">ResetPscEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled">ResetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange">ResetReservedRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata">ResetUserMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdminSettings` <a name="PutAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings"></a>

```go
func PutAdminSettings(value GoogleLookerInstanceAdminSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---

##### `PutCustomDomain` <a name="PutCustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain"></a>

```go
func PutCustomDomain(value GoogleLookerInstanceCustomDomain)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---

##### `PutDenyMaintenancePeriod` <a name="PutDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod"></a>

```go
func PutDenyMaintenancePeriod(value GoogleLookerInstanceDenyMaintenancePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value GoogleLookerInstanceEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value GoogleLookerInstanceMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig"></a>

```go
func PutOauthConfig(value GoogleLookerInstanceOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig"></a>

```go
func PutPscConfig(value GoogleLookerInstancePscConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleLookerInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

---

##### `PutUserMetadata` <a name="PutUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata"></a>

```go
func PutUserMetadata(value GoogleLookerInstanceUserMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---

##### `ResetAdminSettings` <a name="ResetAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings"></a>

```go
func ResetAdminSettings()
```

##### `ResetConsumerNetwork` <a name="ResetConsumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork"></a>

```go
func ResetConsumerNetwork()
```

##### `ResetCustomDomain` <a name="ResetCustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetCustomDomain"></a>

```go
func ResetCustomDomain()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDenyMaintenancePeriod` <a name="ResetDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod"></a>

```go
func ResetDenyMaintenancePeriod()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetFipsEnabled"></a>

```go
func ResetFipsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetPlatformEdition` <a name="ResetPlatformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition"></a>

```go
func ResetPlatformEdition()
```

##### `ResetPrivateIpEnabled` <a name="ResetPrivateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled"></a>

```go
func ResetPrivateIpEnabled()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscConfig"></a>

```go
func ResetPscConfig()
```

##### `ResetPscEnabled` <a name="ResetPscEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscEnabled"></a>

```go
func ResetPscEnabled()
```

##### `ResetPublicIpEnabled` <a name="ResetPublicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled"></a>

```go
func ResetPublicIpEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReservedRange` <a name="ResetReservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange"></a>

```go
func ResetReservedRange()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserMetadata` <a name="ResetUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata"></a>

```go
func ResetUserMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLookerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.GoogleLookerInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.GoogleLookerInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.GoogleLookerInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.GoogleLookerInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleLookerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleLookerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleLookerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLookerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings">AdminSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference">GoogleLookerInstanceCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp">EgressPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp">IngressPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp">IngressPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri">LookerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion">LookerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference">GoogleLookerInstancePscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata">UserMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput">AdminSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput">ConsumerNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomainInput">CustomDomainInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput">DenyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput">PlatformEditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput">PrivateIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfigInput">PscConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabledInput">PscEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput">PublicIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput">ReservedRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput">UserMetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork">ConsumerNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabled">FipsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition">PlatformEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled">PrivateIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabled">PscEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange">ReservedRange</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminSettings`<sup>Required</sup> <a name="AdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings"></a>

```go
func AdminSettings() GoogleLookerInstanceAdminSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomain"></a>

```go
func CustomDomain() GoogleLookerInstanceCustomDomainOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference">GoogleLookerInstanceCustomDomainOutputReference</a>

---

##### `DenyMaintenancePeriod`<sup>Required</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod"></a>

```go
func DenyMaintenancePeriod() GoogleLookerInstanceDenyMaintenancePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `EgressPublicIp`<sup>Required</sup> <a name="EgressPublicIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp"></a>

```go
func EgressPublicIp() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig"></a>

```go
func EncryptionConfig() GoogleLookerInstanceEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a>

---

##### `IngressPrivateIp`<sup>Required</sup> <a name="IngressPrivateIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp"></a>

```go
func IngressPrivateIp() *string
```

- *Type:* *string

---

##### `IngressPublicIp`<sup>Required</sup> <a name="IngressPublicIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp"></a>

```go
func IngressPublicIp() *string
```

- *Type:* *string

---

##### `LookerUri`<sup>Required</sup> <a name="LookerUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri"></a>

```go
func LookerUri() *string
```

- *Type:* *string

---

##### `LookerVersion`<sup>Required</sup> <a name="LookerVersion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion"></a>

```go
func LookerVersion() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() GoogleLookerInstanceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig"></a>

```go
func OauthConfig() GoogleLookerInstanceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a>

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfig"></a>

```go
func PscConfig() GoogleLookerInstancePscConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference">GoogleLookerInstancePscConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts"></a>

```go
func Timeouts() GoogleLookerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UserMetadata`<sup>Required</sup> <a name="UserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata"></a>

```go
func UserMetadata() GoogleLookerInstanceUserMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a>

---

##### `AdminSettingsInput`<sup>Optional</sup> <a name="AdminSettingsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput"></a>

```go
func AdminSettingsInput() GoogleLookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---

##### `ConsumerNetworkInput`<sup>Optional</sup> <a name="ConsumerNetworkInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput"></a>

```go
func ConsumerNetworkInput() *string
```

- *Type:* *string

---

##### `CustomDomainInput`<sup>Optional</sup> <a name="CustomDomainInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomainInput"></a>

```go
func CustomDomainInput() GoogleLookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DenyMaintenancePeriodInput`<sup>Optional</sup> <a name="DenyMaintenancePeriodInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput"></a>

```go
func DenyMaintenancePeriodInput() GoogleLookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() GoogleLookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabledInput"></a>

```go
func FipsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() GoogleLookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput"></a>

```go
func OauthConfigInput() GoogleLookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---

##### `PlatformEditionInput`<sup>Optional</sup> <a name="PlatformEditionInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput"></a>

```go
func PlatformEditionInput() *string
```

- *Type:* *string

---

##### `PrivateIpEnabledInput`<sup>Optional</sup> <a name="PrivateIpEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput"></a>

```go
func PrivateIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfigInput"></a>

```go
func PscConfigInput() GoogleLookerInstancePscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---

##### `PscEnabledInput`<sup>Optional</sup> <a name="PscEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabledInput"></a>

```go
func PscEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PublicIpEnabledInput`<sup>Optional</sup> <a name="PublicIpEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput"></a>

```go
func PublicIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReservedRangeInput`<sup>Optional</sup> <a name="ReservedRangeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput"></a>

```go
func ReservedRangeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserMetadataInput`<sup>Optional</sup> <a name="UserMetadataInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput"></a>

```go
func UserMetadataInput() GoogleLookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork"></a>

```go
func ConsumerNetwork() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabled"></a>

```go
func FipsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PlatformEdition`<sup>Required</sup> <a name="PlatformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition"></a>

```go
func PlatformEdition() *string
```

- *Type:* *string

---

##### `PrivateIpEnabled`<sup>Required</sup> <a name="PrivateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled"></a>

```go
func PrivateIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PscEnabled`<sup>Required</sup> <a name="PscEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabled"></a>

```go
func PscEnabled() interface{}
```

- *Type:* interface{}

---

##### `PublicIpEnabled`<sup>Required</sup> <a name="PublicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled"></a>

```go
func PublicIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReservedRange`<sup>Required</sup> <a name="ReservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange"></a>

```go
func ReservedRange() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLookerInstanceAdminSettings <a name="GoogleLookerInstanceAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceAdminSettings {
	AllowedEmailDomains: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>*[]*string</code> | Email domain allowlist for the instance. |

---

##### `AllowedEmailDomains`<sup>Optional</sup> <a name="AllowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```go
AllowedEmailDomains *[]*string
```

- *Type:* *[]*string

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#allowed_email_domains GoogleLookerInstance#allowed_email_domains}

---

### GoogleLookerInstanceConfig <a name="GoogleLookerInstanceConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OauthConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceOauthConfig,
	AdminSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceAdminSettings,
	ConsumerNetwork: *string,
	CustomDomain: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceCustomDomain,
	DeletionPolicy: *string,
	DenyMaintenancePeriod: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod,
	EncryptionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig,
	FipsEnabled: interface{},
	Id: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow,
	PlatformEdition: *string,
	PrivateIpEnabled: interface{},
	Project: *string,
	PscConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstancePscConfig,
	PscEnabled: interface{},
	PublicIpEnabled: interface{},
	Region: *string,
	ReservedRange: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceTimeouts,
	UserMetadata: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceUserMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings">AdminSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork">ConsumerNetwork</a></code> | <code>*string</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod">DenyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.fipsEnabled">FipsEnabled</a></code> | <code>interface{}</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition">PlatformEdition</a></code> | <code>*string</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled">PrivateIpEnabled</a></code> | <code>interface{}</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscEnabled">PscEnabled</a></code> | <code>interface{}</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>interface{}</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region">Region</a></code> | <code>*string</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange">ReservedRange</a></code> | <code>*string</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata">UserMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#name GoogleLookerInstance#name}

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig"></a>

```go
OauthConfig GoogleLookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#oauth_config GoogleLookerInstance#oauth_config}

---

##### `AdminSettings`<sup>Optional</sup> <a name="AdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings"></a>

```go
AdminSettings GoogleLookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#admin_settings GoogleLookerInstance#admin_settings}

---

##### `ConsumerNetwork`<sup>Optional</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork"></a>

```go
ConsumerNetwork *string
```

- *Type:* *string

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#consumer_network GoogleLookerInstance#consumer_network}

---

##### `CustomDomain`<sup>Optional</sup> <a name="CustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.customDomain"></a>

```go
CustomDomain GoogleLookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#custom_domain GoogleLookerInstance#custom_domain}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Policy to determine if the cluster should be deleted forcefully.

If setting deletion_policy = "FORCE", the Looker instance will be deleted regardless
of its nested resources. If set to "DEFAULT", Looker instances that still have
nested resources will return an error. Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#deletion_policy GoogleLookerInstance#deletion_policy}

---

##### `DenyMaintenancePeriod`<sup>Optional</sup> <a name="DenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod"></a>

```go
DenyMaintenancePeriod GoogleLookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#deny_maintenance_period GoogleLookerInstance#deny_maintenance_period}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig"></a>

```go
EncryptionConfig GoogleLookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#encryption_config GoogleLookerInstance#encryption_config}

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.fipsEnabled"></a>

```go
FipsEnabled interface{}
```

- *Type:* interface{}

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#fips_enabled GoogleLookerInstance#fips_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow GoogleLookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#maintenance_window GoogleLookerInstance#maintenance_window}

---

##### `PlatformEdition`<sup>Optional</sup> <a name="PlatformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition"></a>

```go
PlatformEdition *string
```

- *Type:* *string

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
* LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
* LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
* LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#platform_edition GoogleLookerInstance#platform_edition}

---

##### `PrivateIpEnabled`<sup>Optional</sup> <a name="PrivateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled"></a>

```go
PrivateIpEnabled interface{}
```

- *Type:* interface{}

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#private_ip_enabled GoogleLookerInstance#private_ip_enabled}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}.

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscConfig"></a>

```go
PscConfig GoogleLookerInstancePscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#psc_config GoogleLookerInstance#psc_config}

---

##### `PscEnabled`<sup>Optional</sup> <a name="PscEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscEnabled"></a>

```go
PscEnabled interface{}
```

- *Type:* interface{}

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#psc_enabled GoogleLookerInstance#psc_enabled}

---

##### `PublicIpEnabled`<sup>Optional</sup> <a name="PublicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled"></a>

```go
PublicIpEnabled interface{}
```

- *Type:* interface{}

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#public_ip_enabled GoogleLookerInstance#public_ip_enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#region GoogleLookerInstance#region}

---

##### `ReservedRange`<sup>Optional</sup> <a name="ReservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange"></a>

```go
ReservedRange *string
```

- *Type:* *string

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#reserved_range GoogleLookerInstance#reserved_range}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleLookerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#timeouts GoogleLookerInstance#timeouts}

---

##### `UserMetadata`<sup>Optional</sup> <a name="UserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata"></a>

```go
UserMetadata GoogleLookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#user_metadata GoogleLookerInstance#user_metadata}

---

### GoogleLookerInstanceCustomDomain <a name="GoogleLookerInstanceCustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceCustomDomain {
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.property.domain">Domain</a></code> | <code>*string</code> | Domain name. |

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#domain GoogleLookerInstance#domain}

---

### GoogleLookerInstanceDenyMaintenancePeriod <a name="GoogleLookerInstanceDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceDenyMaintenancePeriod {
	EndDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate,
	StartDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate,
	Time: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time">Time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```go
EndDate GoogleLookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#end_date GoogleLookerInstance#end_date}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```go
StartDate GoogleLookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#start_date GoogleLookerInstance#start_date}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time"></a>

```go
Time GoogleLookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#time GoogleLookerInstance#time}

---

### GoogleLookerInstanceDenyMaintenancePeriodEndDate <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodStartDate <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodTime <a name="GoogleLookerInstanceDenyMaintenancePeriodTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceDenyMaintenancePeriodTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceEncryptionConfig <a name="GoogleLookerInstanceEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceEncryptionConfig {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#kms_key_name GoogleLookerInstance#kms_key_name}

---

### GoogleLookerInstanceMaintenanceWindow <a name="GoogleLookerInstanceMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceMaintenanceWindow {
	DayOfWeek: *string,
	StartTime: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#day_of_week GoogleLookerInstance#day_of_week}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime"></a>

```go
StartTime GoogleLookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#start_time GoogleLookerInstance#start_time}

---

### GoogleLookerInstanceMaintenanceWindowStartTime <a name="GoogleLookerInstanceMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceMaintenanceWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceOauthConfig <a name="GoogleLookerInstanceOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceOauthConfig {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for the Oauth config. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#client_id GoogleLookerInstance#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#client_secret GoogleLookerInstance#client_secret}

---

### GoogleLookerInstancePscConfig <a name="GoogleLookerInstancePscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstancePscConfig {
	AllowedVpcs: *[]*string,
	ServiceAttachments: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.allowedVpcs">AllowedVpcs</a></code> | <code>*[]*string</code> | List of VPCs that are allowed ingress into the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.serviceAttachments">ServiceAttachments</a></code> | <code>interface{}</code> | service_attachments block. |

---

##### `AllowedVpcs`<sup>Optional</sup> <a name="AllowedVpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.allowedVpcs"></a>

```go
AllowedVpcs *[]*string
```

- *Type:* *[]*string

List of VPCs that are allowed ingress into the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#allowed_vpcs GoogleLookerInstance#allowed_vpcs}

---

##### `ServiceAttachments`<sup>Optional</sup> <a name="ServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.serviceAttachments"></a>

```go
ServiceAttachments interface{}
```

- *Type:* interface{}

service_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#service_attachments GoogleLookerInstance#service_attachments}

---

### GoogleLookerInstancePscConfigServiceAttachments <a name="GoogleLookerInstancePscConfigServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstancePscConfigServiceAttachments {
	LocalFqdn: *string,
	TargetServiceAttachmentUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.localFqdn">LocalFqdn</a></code> | <code>*string</code> | Fully qualified domain name that will be used in the private DNS record created for the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri">TargetServiceAttachmentUri</a></code> | <code>*string</code> | URI of the service attachment to connect to. |

---

##### `LocalFqdn`<sup>Optional</sup> <a name="LocalFqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.localFqdn"></a>

```go
LocalFqdn *string
```

- *Type:* *string

Fully qualified domain name that will be used in the private DNS record created for the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#local_fqdn GoogleLookerInstance#local_fqdn}

---

##### `TargetServiceAttachmentUri`<sup>Optional</sup> <a name="TargetServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri"></a>

```go
TargetServiceAttachmentUri *string
```

- *Type:* *string

URI of the service attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#target_service_attachment_uri GoogleLookerInstance#target_service_attachment_uri}

---

### GoogleLookerInstanceTimeouts <a name="GoogleLookerInstanceTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}.

---

### GoogleLookerInstanceUserMetadata <a name="GoogleLookerInstanceUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

&googlelookerinstance.GoogleLookerInstanceUserMetadata {
	AdditionalDeveloperUserCount: *f64,
	AdditionalStandardUserCount: *f64,
	AdditionalViewerUserCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount">AdditionalDeveloperUserCount</a></code> | <code>*f64</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount">AdditionalStandardUserCount</a></code> | <code>*f64</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount">AdditionalViewerUserCount</a></code> | <code>*f64</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `AdditionalDeveloperUserCount`<sup>Optional</sup> <a name="AdditionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```go
AdditionalDeveloperUserCount *f64
```

- *Type:* *f64

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#additional_developer_user_count GoogleLookerInstance#additional_developer_user_count}

---

##### `AdditionalStandardUserCount`<sup>Optional</sup> <a name="AdditionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```go
AdditionalStandardUserCount *f64
```

- *Type:* *f64

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#additional_standard_user_count GoogleLookerInstance#additional_standard_user_count}

---

##### `AdditionalViewerUserCount`<sup>Optional</sup> <a name="AdditionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```go
AdditionalViewerUserCount *f64
```

- *Type:* *f64

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_looker_instance#additional_viewer_user_count GoogleLookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLookerInstanceAdminSettingsOutputReference <a name="GoogleLookerInstanceAdminSettingsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceAdminSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceAdminSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">ResetAllowedEmailDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedEmailDomains` <a name="ResetAllowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```go
func ResetAllowedEmailDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">AllowedEmailDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedEmailDomainsInput`<sup>Optional</sup> <a name="AllowedEmailDomainsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```go
func AllowedEmailDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedEmailDomains`<sup>Required</sup> <a name="AllowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```go
func AllowedEmailDomains() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---


### GoogleLookerInstanceCustomDomainOutputReference <a name="GoogleLookerInstanceCustomDomainOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceCustomDomainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceCustomDomainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resetDomain"></a>

```go
func ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```go
func ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceDenyMaintenancePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceDenyMaintenancePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime">PutTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```go
func PutEndDate(value GoogleLookerInstanceDenyMaintenancePeriodEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```go
func PutStartDate(value GoogleLookerInstanceDenyMaintenancePeriodStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `PutTime` <a name="PutTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```go
func PutTime(value GoogleLookerInstanceDenyMaintenancePeriodTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time">Time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">TimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```go
func EndDate() GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```go
func StartDate() GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```go
func Time() GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```go
func EndDateInput() GoogleLookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```go
func StartDateInput() GoogleLookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```go
func TimeInput() GoogleLookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```go
func ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---


### GoogleLookerInstanceEncryptionConfigOutputReference <a name="GoogleLookerInstanceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">KmsKeyNameVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">KmsKeyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameVersion`<sup>Required</sup> <a name="KmsKeyNameVersion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```go
func KmsKeyNameVersion() *string
```

- *Type:* *string

---

##### `KmsKeyState`<sup>Required</sup> <a name="KmsKeyState" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```go
func KmsKeyState() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---


### GoogleLookerInstanceMaintenanceWindowOutputReference <a name="GoogleLookerInstanceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```go
func PutStartTime(value GoogleLookerInstanceMaintenanceWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() GoogleLookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---


### GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference <a name="GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceMaintenanceWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---


### GoogleLookerInstanceOauthConfigOutputReference <a name="GoogleLookerInstanceOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---


### GoogleLookerInstancePscConfigOutputReference <a name="GoogleLookerInstancePscConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstancePscConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstancePscConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments">PutServiceAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetAllowedVpcs">ResetAllowedVpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetServiceAttachments">ResetServiceAttachments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAttachments` <a name="PutServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments"></a>

```go
func PutServiceAttachments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedVpcs` <a name="ResetAllowedVpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetAllowedVpcs"></a>

```go
func ResetAllowedVpcs()
```

##### `ResetServiceAttachments` <a name="ResetServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetServiceAttachments"></a>

```go
func ResetServiceAttachments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri">LookerServiceAttachmentUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachments">ServiceAttachments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList">GoogleLookerInstancePscConfigServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcsInput">AllowedVpcsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachmentsInput">ServiceAttachmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcs">AllowedVpcs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LookerServiceAttachmentUri`<sup>Required</sup> <a name="LookerServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri"></a>

```go
func LookerServiceAttachmentUri() *string
```

- *Type:* *string

---

##### `ServiceAttachments`<sup>Required</sup> <a name="ServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachments"></a>

```go
func ServiceAttachments() GoogleLookerInstancePscConfigServiceAttachmentsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList">GoogleLookerInstancePscConfigServiceAttachmentsList</a>

---

##### `AllowedVpcsInput`<sup>Optional</sup> <a name="AllowedVpcsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcsInput"></a>

```go
func AllowedVpcsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAttachmentsInput`<sup>Optional</sup> <a name="ServiceAttachmentsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachmentsInput"></a>

```go
func ServiceAttachmentsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedVpcs`<sup>Required</sup> <a name="AllowedVpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcs"></a>

```go
func AllowedVpcs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstancePscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---


### GoogleLookerInstancePscConfigServiceAttachmentsList <a name="GoogleLookerInstancePscConfigServiceAttachmentsList" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstancePscConfigServiceAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLookerInstancePscConfigServiceAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get"></a>

```go
func Get(index *f64) GoogleLookerInstancePscConfigServiceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLookerInstancePscConfigServiceAttachmentsOutputReference <a name="GoogleLookerInstancePscConfigServiceAttachmentsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstancePscConfigServiceAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLookerInstancePscConfigServiceAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn">ResetLocalFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri">ResetTargetServiceAttachmentUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalFqdn` <a name="ResetLocalFqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn"></a>

```go
func ResetLocalFqdn()
```

##### `ResetTargetServiceAttachmentUri` <a name="ResetTargetServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri"></a>

```go
func ResetTargetServiceAttachmentUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus">ConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput">LocalFqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput">TargetServiceAttachmentUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn">LocalFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri">TargetServiceAttachmentUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus"></a>

```go
func ConnectionStatus() *string
```

- *Type:* *string

---

##### `LocalFqdnInput`<sup>Optional</sup> <a name="LocalFqdnInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput"></a>

```go
func LocalFqdnInput() *string
```

- *Type:* *string

---

##### `TargetServiceAttachmentUriInput`<sup>Optional</sup> <a name="TargetServiceAttachmentUriInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput"></a>

```go
func TargetServiceAttachmentUriInput() *string
```

- *Type:* *string

---

##### `LocalFqdn`<sup>Required</sup> <a name="LocalFqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn"></a>

```go
func LocalFqdn() *string
```

- *Type:* *string

---

##### `TargetServiceAttachmentUri`<sup>Required</sup> <a name="TargetServiceAttachmentUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri"></a>

```go
func TargetServiceAttachmentUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLookerInstanceTimeoutsOutputReference <a name="GoogleLookerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLookerInstanceUserMetadataOutputReference <a name="GoogleLookerInstanceUserMetadataOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlelookerinstance"

googlelookerinstance.NewGoogleLookerInstanceUserMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLookerInstanceUserMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">ResetAdditionalDeveloperUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">ResetAdditionalStandardUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">ResetAdditionalViewerUserCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalDeveloperUserCount` <a name="ResetAdditionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```go
func ResetAdditionalDeveloperUserCount()
```

##### `ResetAdditionalStandardUserCount` <a name="ResetAdditionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```go
func ResetAdditionalStandardUserCount()
```

##### `ResetAdditionalViewerUserCount` <a name="ResetAdditionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```go
func ResetAdditionalViewerUserCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">AdditionalDeveloperUserCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">AdditionalStandardUserCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">AdditionalViewerUserCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">AdditionalDeveloperUserCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">AdditionalStandardUserCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">AdditionalViewerUserCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDeveloperUserCountInput`<sup>Optional</sup> <a name="AdditionalDeveloperUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```go
func AdditionalDeveloperUserCountInput() *f64
```

- *Type:* *f64

---

##### `AdditionalStandardUserCountInput`<sup>Optional</sup> <a name="AdditionalStandardUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```go
func AdditionalStandardUserCountInput() *f64
```

- *Type:* *f64

---

##### `AdditionalViewerUserCountInput`<sup>Optional</sup> <a name="AdditionalViewerUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```go
func AdditionalViewerUserCountInput() *f64
```

- *Type:* *f64

---

##### `AdditionalDeveloperUserCount`<sup>Required</sup> <a name="AdditionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```go
func AdditionalDeveloperUserCount() *f64
```

- *Type:* *f64

---

##### `AdditionalStandardUserCount`<sup>Required</sup> <a name="AdditionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```go
func AdditionalStandardUserCount() *f64
```

- *Type:* *f64

---

##### `AdditionalViewerUserCount`<sup>Required</sup> <a name="AdditionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```go
func AdditionalViewerUserCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---



