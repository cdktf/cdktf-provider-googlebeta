# `googleDataFusionInstance` Submodule <a name="`googleDataFusionInstance` Submodule" id="@cdktf/provider-google-beta.googleDataFusionInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataFusionInstance <a name="GoogleDataFusionInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance google_data_fusion_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstance(scope Construct, id *string, config GoogleDataFusionInstanceConfig) GoogleDataFusionInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig">GoogleDataFusionInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig">GoogleDataFusionInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig">PutCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig">PutEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig">ResetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount">ResetDataprocServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac">ResetEnableRbac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring">ResetEnableStackdriverMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig">ResetEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance">ResetPrivateInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators"></a>

```go
func PutAccelerators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCryptoKeyConfig` <a name="PutCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig"></a>

```go
func PutCryptoKeyConfig(value GoogleDataFusionInstanceCryptoKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `PutEventPublishConfig` <a name="PutEventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig"></a>

```go
func PutEventPublishConfig(value GoogleDataFusionInstanceEventPublishConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GoogleDataFusionInstanceNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataFusionInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators"></a>

```go
func ResetAccelerators()
```

##### `ResetCryptoKeyConfig` <a name="ResetCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig"></a>

```go
func ResetCryptoKeyConfig()
```

##### `ResetDataprocServiceAccount` <a name="ResetDataprocServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount"></a>

```go
func ResetDataprocServiceAccount()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnableRbac` <a name="ResetEnableRbac" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac"></a>

```go
func ResetEnableRbac()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging"></a>

```go
func ResetEnableStackdriverLogging()
```

##### `ResetEnableStackdriverMonitoring` <a name="ResetEnableStackdriverMonitoring" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring"></a>

```go
func ResetEnableStackdriverMonitoring()
```

##### `ResetEventPublishConfig` <a name="ResetEventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig"></a>

```go
func ResetEventPublishConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetPrivateInstance` <a name="ResetPrivateInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance"></a>

```go
func ResetPrivateInstance()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataFusionInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.GoogleDataFusionInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.GoogleDataFusionInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.GoogleDataFusionInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.GoogleDataFusionInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataFusionInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataFusionInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataFusionInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataFusionInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint">ApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig">EventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount">P4ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId">TenantProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput">CryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput">DataprocServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput">EnableRbacInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput">EnableStackdriverMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput">EventPublishConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput">PrivateInstanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount">DataprocServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac">EnableRbac</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring">EnableStackdriverMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance">PrivateInstance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators"></a>

```go
func Accelerators() GoogleDataFusionInstanceAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a>

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint"></a>

```go
func ApiEndpoint() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CryptoKeyConfig`<sup>Required</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig"></a>

```go
func CryptoKeyConfig() GoogleDataFusionInstanceCryptoKeyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EventPublishConfig`<sup>Required</sup> <a name="EventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig"></a>

```go
func EventPublishConfig() GoogleDataFusionInstanceEventPublishConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a>

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket"></a>

```go
func GcsBucket() *string
```

- *Type:* *string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig"></a>

```go
func NetworkConfig() GoogleDataFusionInstanceNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a>

---

##### `P4ServiceAccount`<sup>Required</sup> <a name="P4ServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount"></a>

```go
func P4ServiceAccount() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint"></a>

```go
func ServiceEndpoint() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TenantProjectId`<sup>Required</sup> <a name="TenantProjectId" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId"></a>

```go
func TenantProjectId() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts"></a>

```go
func Timeouts() GoogleDataFusionInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput"></a>

```go
func AcceleratorsInput() interface{}
```

- *Type:* interface{}

---

##### `CryptoKeyConfigInput`<sup>Optional</sup> <a name="CryptoKeyConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput"></a>

```go
func CryptoKeyConfigInput() GoogleDataFusionInstanceCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `DataprocServiceAccountInput`<sup>Optional</sup> <a name="DataprocServiceAccountInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput"></a>

```go
func DataprocServiceAccountInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableRbacInput`<sup>Optional</sup> <a name="EnableRbacInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput"></a>

```go
func EnableRbacInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput"></a>

```go
func EnableStackdriverLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverMonitoringInput`<sup>Optional</sup> <a name="EnableStackdriverMonitoringInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput"></a>

```go
func EnableStackdriverMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `EventPublishConfigInput`<sup>Optional</sup> <a name="EventPublishConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput"></a>

```go
func EventPublishConfigInput() GoogleDataFusionInstanceEventPublishConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GoogleDataFusionInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PrivateInstanceInput`<sup>Optional</sup> <a name="PrivateInstanceInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput"></a>

```go
func PrivateInstanceInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DataprocServiceAccount`<sup>Required</sup> <a name="DataprocServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount"></a>

```go
func DataprocServiceAccount() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableRbac`<sup>Required</sup> <a name="EnableRbac" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac"></a>

```go
func EnableRbac() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging"></a>

```go
func EnableStackdriverLogging() interface{}
```

- *Type:* interface{}

---

##### `EnableStackdriverMonitoring`<sup>Required</sup> <a name="EnableStackdriverMonitoring" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring"></a>

```go
func EnableStackdriverMonitoring() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PrivateInstance`<sup>Required</sup> <a name="PrivateInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance"></a>

```go
func PrivateInstance() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataFusionInstanceAccelerators <a name="GoogleDataFusionInstanceAccelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

&googledatafusioninstance.GoogleDataFusionInstanceAccelerators {
	AcceleratorType: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state">State</a></code> | <code>*string</code> | The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]. |

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#accelerator_type GoogleDataFusionInstance#accelerator_type}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state"></a>

```go
State *string
```

- *Type:* *string

The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#state GoogleDataFusionInstance#state}

---

### GoogleDataFusionInstanceConfig <a name="GoogleDataFusionInstanceConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

&googledatafusioninstance.GoogleDataFusionInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	Accelerators: interface{},
	CryptoKeyConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig,
	DataprocServiceAccount: *string,
	Description: *string,
	DisplayName: *string,
	EnableRbac: interface{},
	EnableStackdriverLogging: interface{},
	EnableStackdriverMonitoring: interface{},
	EventPublishConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig,
	Id: *string,
	Labels: *map[string]*string,
	NetworkConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig,
	Options: *map[string]*string,
	PrivateInstance: interface{},
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts,
	Version: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type">Type</a></code> | <code>*string</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators">Accelerators</a></code> | <code>interface{}</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount">DataprocServiceAccount</a></code> | <code>*string</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name for an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac">EnableRbac</a></code> | <code>interface{}</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>interface{}</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring">EnableStackdriverMonitoring</a></code> | <code>interface{}</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig">EventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance">PrivateInstance</a></code> | <code>interface{}</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region">Region</a></code> | <code>*string</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version">Version</a></code> | <code>*string</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone">Zone</a></code> | <code>*string</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#name GoogleDataFusionInstance#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.

* BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  using point and click UI. However, there are certain limitations, such as fewer number
  of concurrent pipelines, no support for streaming pipelines, etc.
* ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
* DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#type GoogleDataFusionInstance#type}

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators"></a>

```go
Accelerators interface{}
```

- *Type:* interface{}

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#accelerators GoogleDataFusionInstance#accelerators}

---

##### `CryptoKeyConfig`<sup>Optional</sup> <a name="CryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig"></a>

```go
CryptoKeyConfig GoogleDataFusionInstanceCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#crypto_key_config GoogleDataFusionInstance#crypto_key_config}

---

##### `DataprocServiceAccount`<sup>Optional</sup> <a name="DataprocServiceAccount" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount"></a>

```go
DataprocServiceAccount *string
```

- *Type:* *string

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#dataproc_service_account GoogleDataFusionInstance#dataproc_service_account}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#description GoogleDataFusionInstance#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#display_name GoogleDataFusionInstance#display_name}

---

##### `EnableRbac`<sup>Optional</sup> <a name="EnableRbac" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac"></a>

```go
EnableRbac interface{}
```

- *Type:* interface{}

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#enable_rbac GoogleDataFusionInstance#enable_rbac}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging"></a>

```go
EnableStackdriverLogging interface{}
```

- *Type:* interface{}

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#enable_stackdriver_logging GoogleDataFusionInstance#enable_stackdriver_logging}

---

##### `EnableStackdriverMonitoring`<sup>Optional</sup> <a name="EnableStackdriverMonitoring" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring"></a>

```go
EnableStackdriverMonitoring interface{}
```

- *Type:* interface{}

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#enable_stackdriver_monitoring GoogleDataFusionInstance#enable_stackdriver_monitoring}

---

##### `EventPublishConfig`<sup>Optional</sup> <a name="EventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig"></a>

```go
EventPublishConfig GoogleDataFusionInstanceEventPublishConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#event_publish_config GoogleDataFusionInstance#event_publish_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#labels GoogleDataFusionInstance#labels}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig"></a>

```go
NetworkConfig GoogleDataFusionInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#network_config GoogleDataFusionInstance#network_config}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#options GoogleDataFusionInstance#options}

---

##### `PrivateInstance`<sup>Optional</sup> <a name="PrivateInstance" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance"></a>

```go
PrivateInstance interface{}
```

- *Type:* interface{}

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#private_instance GoogleDataFusionInstance#private_instance}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#region GoogleDataFusionInstance#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleDataFusionInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#timeouts GoogleDataFusionInstance#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#version GoogleDataFusionInstance#version}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#zone GoogleDataFusionInstance#zone}

---

### GoogleDataFusionInstanceCryptoKeyConfig <a name="GoogleDataFusionInstanceCryptoKeyConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

&googledatafusioninstance.GoogleDataFusionInstanceCryptoKeyConfig {
	KeyReference: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference">KeyReference</a></code> | <code>*string</code> | The name of the key which is used to encrypt/decrypt customer data. |

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference"></a>

```go
KeyReference *string
```

- *Type:* *string

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#key_reference GoogleDataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDataFusionInstanceEventPublishConfig <a name="GoogleDataFusionInstanceEventPublishConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

&googledatafusioninstance.GoogleDataFusionInstanceEventPublishConfig {
	Enabled: interface{},
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Option to enable Event Publishing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic">Topic</a></code> | <code>*string</code> | The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#enabled GoogleDataFusionInstance#enabled}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#topic GoogleDataFusionInstance#topic}

---

### GoogleDataFusionInstanceNetworkConfig <a name="GoogleDataFusionInstanceNetworkConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

&googledatafusioninstance.GoogleDataFusionInstanceNetworkConfig {
	ConnectionType: *string,
	IpAllocation: *string,
	Network: *string,
	PrivateServiceConnectConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation">IpAllocation</a></code> | <code>*string</code> | The IP range in CIDR notation to use for the managed Data Fusion instance nodes. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network">Network</a></code> | <code>*string</code> | Name of the network in the project with which the tenant project will be peered for executing pipelines. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#connection_type GoogleDataFusionInstance#connection_type}

---

##### `IpAllocation`<sup>Optional</sup> <a name="IpAllocation" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation"></a>

```go
IpAllocation *string
```

- *Type:* *string

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#ip_allocation GoogleDataFusionInstance#ip_allocation}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#network GoogleDataFusionInstance#network}

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig"></a>

```go
PrivateServiceConnectConfig GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#private_service_connect_config GoogleDataFusionInstance#private_service_connect_config}

---

### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

&googledatafusioninstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig {
	NetworkAttachment: *string,
	UnreachableCidrBlock: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock">UnreachableCidrBlock</a></code> | <code>*string</code> | Optional. |

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#network_attachment GoogleDataFusionInstance#network_attachment}

---

##### `UnreachableCidrBlock`<sup>Optional</sup> <a name="UnreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock"></a>

```go
UnreachableCidrBlock *string
```

- *Type:* *string

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#unreachable_cidr_block GoogleDataFusionInstance#unreachable_cidr_block}

---

### GoogleDataFusionInstanceTimeouts <a name="GoogleDataFusionInstanceTimeouts" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

&googledatafusioninstance.GoogleDataFusionInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataFusionInstanceAcceleratorsList <a name="GoogleDataFusionInstanceAcceleratorsList" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstanceAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataFusionInstanceAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get"></a>

```go
func Get(index *f64) GoogleDataFusionInstanceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataFusionInstanceAcceleratorsOutputReference <a name="GoogleDataFusionInstanceAcceleratorsOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstanceAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataFusionInstanceAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataFusionInstanceCryptoKeyConfigOutputReference <a name="GoogleDataFusionInstanceCryptoKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstanceCryptoKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataFusionInstanceCryptoKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput">KeyReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference">KeyReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyReferenceInput`<sup>Optional</sup> <a name="KeyReferenceInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```go
func KeyReferenceInput() *string
```

- *Type:* *string

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference"></a>

```go
func KeyReference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataFusionInstanceCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---


### GoogleDataFusionInstanceEventPublishConfigOutputReference <a name="GoogleDataFusionInstanceEventPublishConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstanceEventPublishConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataFusionInstanceEventPublishConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataFusionInstanceEventPublishConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---


### GoogleDataFusionInstanceNetworkConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstanceNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataFusionInstanceNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation">ResetIpAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig"></a>

```go
func PutPrivateServiceConnectConfig(value GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType"></a>

```go
func ResetConnectionType()
```

##### `ResetIpAllocation` <a name="ResetIpAllocation" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation"></a>

```go
func ResetIpAllocation()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig"></a>

```go
func ResetPrivateServiceConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput">IpAllocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation">IpAllocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig"></a>

```go
func PrivateServiceConnectConfig() GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a>

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `IpAllocationInput`<sup>Optional</sup> <a name="IpAllocationInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput"></a>

```go
func IpAllocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput"></a>

```go
func PrivateServiceConnectConfigInput() GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `IpAllocation`<sup>Required</sup> <a name="IpAllocation" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation"></a>

```go
func IpAllocation() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataFusionInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---


### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock">ResetUnreachableCidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```

##### `ResetUnreachableCidrBlock` <a name="ResetUnreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock"></a>

```go
func ResetUnreachableCidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock">EffectiveUnreachableCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput">UnreachableCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock">UnreachableCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveUnreachableCidrBlock`<sup>Required</sup> <a name="EffectiveUnreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock"></a>

```go
func EffectiveUnreachableCidrBlock() *string
```

- *Type:* *string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `UnreachableCidrBlockInput`<sup>Optional</sup> <a name="UnreachableCidrBlockInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput"></a>

```go
func UnreachableCidrBlockInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `UnreachableCidrBlock`<sup>Required</sup> <a name="UnreachableCidrBlock" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock"></a>

```go
func UnreachableCidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---


### GoogleDataFusionInstanceTimeoutsOutputReference <a name="GoogleDataFusionInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatafusioninstance"

googledatafusioninstance.NewGoogleDataFusionInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataFusionInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



