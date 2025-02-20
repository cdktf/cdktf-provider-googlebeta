# `googleApigeeOrganization` Submodule <a name="`googleApigeeOrganization` Submodule" id="@cdktf/provider-google-beta.googleApigeeOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeOrganization <a name="GoogleApigeeOrganization" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization google_apigee_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.NewGoogleApigeeOrganization(scope Construct, id *string, config GoogleApigeeOrganizationConfig) GoogleApigeeOrganization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig">GoogleApigeeOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig">GoogleApigeeOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAnalyticsRegion">ResetAnalyticsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataEncryptionKeyName">ResetApiConsumerDataEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataLocation">ResetApiConsumerDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAuthorizedNetwork">ResetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetBillingType">ResetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetControlPlaneEncryptionKeyName">ResetControlPlaneEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisableVpcPeering">ResetDisableVpcPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRetention">ResetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName">ResetRuntimeDatabaseEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties"></a>

```go
func PutProperties(value GoogleApigeeOrganizationProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeOrganizationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

---

##### `ResetAnalyticsRegion` <a name="ResetAnalyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAnalyticsRegion"></a>

```go
func ResetAnalyticsRegion()
```

##### `ResetApiConsumerDataEncryptionKeyName` <a name="ResetApiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataEncryptionKeyName"></a>

```go
func ResetApiConsumerDataEncryptionKeyName()
```

##### `ResetApiConsumerDataLocation` <a name="ResetApiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataLocation"></a>

```go
func ResetApiConsumerDataLocation()
```

##### `ResetAuthorizedNetwork` <a name="ResetAuthorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAuthorizedNetwork"></a>

```go
func ResetAuthorizedNetwork()
```

##### `ResetBillingType` <a name="ResetBillingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetBillingType"></a>

```go
func ResetBillingType()
```

##### `ResetControlPlaneEncryptionKeyName` <a name="ResetControlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetControlPlaneEncryptionKeyName"></a>

```go
func ResetControlPlaneEncryptionKeyName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableVpcPeering` <a name="ResetDisableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisableVpcPeering"></a>

```go
func ResetDisableVpcPeering()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetId"></a>

```go
func ResetId()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetRetention` <a name="ResetRetention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRetention"></a>

```go
func ResetRetention()
```

##### `ResetRuntimeDatabaseEncryptionKeyName` <a name="ResetRuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName"></a>

```go
func ResetRuntimeDatabaseEncryptionKeyName()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeType"></a>

```go
func ResetRuntimeType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.GoogleApigeeOrganization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.GoogleApigeeOrganization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.GoogleApigeeOrganization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.GoogleApigeeOrganization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apigeeProjectId">ApigeeProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference">GoogleApigeeOrganizationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference">GoogleApigeeOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegionInput">AnalyticsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput">ApiConsumerDataEncryptionKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocationInput">ApiConsumerDataLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetworkInput">AuthorizedNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingTypeInput">BillingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyNameInput">ControlPlaneEncryptionKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeeringInput">DisableVpcPeeringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retentionInput">RetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput">RuntimeDatabaseEncryptionKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegion">AnalyticsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyName">ApiConsumerDataEncryptionKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocation">ApiConsumerDataLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingType">BillingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyName">ControlPlaneEncryptionKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeering">DisableVpcPeering</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retention">Retention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyName">RuntimeDatabaseEncryptionKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApigeeProjectId`<sup>Required</sup> <a name="ApigeeProjectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apigeeProjectId"></a>

```go
func ApigeeProjectId() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.properties"></a>

```go
func Properties() GoogleApigeeOrganizationPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference">GoogleApigeeOrganizationPropertiesOutputReference</a>

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.subscriptionType"></a>

```go
func SubscriptionType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeOrganizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference">GoogleApigeeOrganizationTimeoutsOutputReference</a>

---

##### `AnalyticsRegionInput`<sup>Optional</sup> <a name="AnalyticsRegionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegionInput"></a>

```go
func AnalyticsRegionInput() *string
```

- *Type:* *string

---

##### `ApiConsumerDataEncryptionKeyNameInput`<sup>Optional</sup> <a name="ApiConsumerDataEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput"></a>

```go
func ApiConsumerDataEncryptionKeyNameInput() *string
```

- *Type:* *string

---

##### `ApiConsumerDataLocationInput`<sup>Optional</sup> <a name="ApiConsumerDataLocationInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocationInput"></a>

```go
func ApiConsumerDataLocationInput() *string
```

- *Type:* *string

---

##### `AuthorizedNetworkInput`<sup>Optional</sup> <a name="AuthorizedNetworkInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetworkInput"></a>

```go
func AuthorizedNetworkInput() *string
```

- *Type:* *string

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingTypeInput"></a>

```go
func BillingTypeInput() *string
```

- *Type:* *string

---

##### `ControlPlaneEncryptionKeyNameInput`<sup>Optional</sup> <a name="ControlPlaneEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyNameInput"></a>

```go
func ControlPlaneEncryptionKeyNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableVpcPeeringInput`<sup>Optional</sup> <a name="DisableVpcPeeringInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeeringInput"></a>

```go
func DisableVpcPeeringInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retentionInput"></a>

```go
func RetentionInput() *string
```

- *Type:* *string

---

##### `RuntimeDatabaseEncryptionKeyNameInput`<sup>Optional</sup> <a name="RuntimeDatabaseEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput"></a>

```go
func RuntimeDatabaseEncryptionKeyNameInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeTypeInput"></a>

```go
func RuntimeTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsRegion`<sup>Required</sup> <a name="AnalyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegion"></a>

```go
func AnalyticsRegion() *string
```

- *Type:* *string

---

##### `ApiConsumerDataEncryptionKeyName`<sup>Required</sup> <a name="ApiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyName"></a>

```go
func ApiConsumerDataEncryptionKeyName() *string
```

- *Type:* *string

---

##### `ApiConsumerDataLocation`<sup>Required</sup> <a name="ApiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocation"></a>

```go
func ApiConsumerDataLocation() *string
```

- *Type:* *string

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetwork"></a>

```go
func AuthorizedNetwork() *string
```

- *Type:* *string

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingType"></a>

```go
func BillingType() *string
```

- *Type:* *string

---

##### `ControlPlaneEncryptionKeyName`<sup>Required</sup> <a name="ControlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyName"></a>

```go
func ControlPlaneEncryptionKeyName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableVpcPeering`<sup>Required</sup> <a name="DisableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeering"></a>

```go
func DisableVpcPeering() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retention"></a>

```go
func Retention() *string
```

- *Type:* *string

---

##### `RuntimeDatabaseEncryptionKeyName`<sup>Required</sup> <a name="RuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyName"></a>

```go
func RuntimeDatabaseEncryptionKeyName() *string
```

- *Type:* *string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeType"></a>

```go
func RuntimeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeOrganizationConfig <a name="GoogleApigeeOrganizationConfig" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

&googleapigeeorganization.GoogleApigeeOrganizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	AnalyticsRegion: *string,
	ApiConsumerDataEncryptionKeyName: *string,
	ApiConsumerDataLocation: *string,
	AuthorizedNetwork: *string,
	BillingType: *string,
	ControlPlaneEncryptionKeyName: *string,
	Description: *string,
	DisableVpcPeering: interface{},
	DisplayName: *string,
	Id: *string,
	Properties: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeOrganization.GoogleApigeeOrganizationProperties,
	Retention: *string,
	RuntimeDatabaseEncryptionKeyName: *string,
	RuntimeType: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The project ID associated with the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.analyticsRegion">AnalyticsRegion</a></code> | <code>*string</code> | Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName">ApiConsumerDataEncryptionKeyName</a></code> | <code>*string</code> | Cloud KMS key name used for encrypting API consumer data. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataLocation">ApiConsumerDataLocation</a></code> | <code>*string</code> | This field is needed only for customers using non-default data residency regions. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.billingType">BillingType</a></code> | <code>*string</code> | Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName">ControlPlaneEncryptionKeyName</a></code> | <code>*string</code> | Cloud KMS key name used for encrypting control plane data that is stored in a multi region. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.description">Description</a></code> | <code>*string</code> | Description of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.disableVpcPeering">DisableVpcPeering</a></code> | <code>interface{}</code> | Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#id GoogleApigeeOrganization#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.retention">Retention</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName">RuntimeDatabaseEncryptionKeyName</a></code> | <code>*string</code> | Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project ID associated with the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#project_id GoogleApigeeOrganization#project_id}

---

##### `AnalyticsRegion`<sup>Optional</sup> <a name="AnalyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.analyticsRegion"></a>

```go
AnalyticsRegion *string
```

- *Type:* *string

Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#analytics_region GoogleApigeeOrganization#analytics_region}

---

##### `ApiConsumerDataEncryptionKeyName`<sup>Optional</sup> <a name="ApiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName"></a>

```go
ApiConsumerDataEncryptionKeyName *string
```

- *Type:* *string

Cloud KMS key name used for encrypting API consumer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#api_consumer_data_encryption_key_name GoogleApigeeOrganization#api_consumer_data_encryption_key_name}

---

##### `ApiConsumerDataLocation`<sup>Optional</sup> <a name="ApiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataLocation"></a>

```go
ApiConsumerDataLocation *string
```

- *Type:* *string

This field is needed only for customers using non-default data residency regions.

Apigee stores some control plane data only in single region.
This field determines which single region Apigee should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#api_consumer_data_location GoogleApigeeOrganization#api_consumer_data_location}

---

##### `AuthorizedNetwork`<sup>Optional</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.authorizedNetwork"></a>

```go
AuthorizedNetwork *string
```

- *Type:* *string

Compute Engine network used for Service Networking to be peered with Apigee runtime instances.

See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#authorized_network GoogleApigeeOrganization#authorized_network}

---

##### `BillingType`<sup>Optional</sup> <a name="BillingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.billingType"></a>

```go
BillingType *string
```

- *Type:* *string

Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#billing_type GoogleApigeeOrganization#billing_type}

---

##### `ControlPlaneEncryptionKeyName`<sup>Optional</sup> <a name="ControlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName"></a>

```go
ControlPlaneEncryptionKeyName *string
```

- *Type:* *string

Cloud KMS key name used for encrypting control plane data that is stored in a multi region.

Only used for the data residency region "US" or "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#control_plane_encryption_key_name GoogleApigeeOrganization#control_plane_encryption_key_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#description GoogleApigeeOrganization#description}

---

##### `DisableVpcPeering`<sup>Optional</sup> <a name="DisableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.disableVpcPeering"></a>

```go
DisableVpcPeering interface{}
```

- *Type:* interface{}

Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee.

Required if an 'authorizedNetwork'
on the consumer project is not provided, in which case the flag should be set to 'true'.
Valid only when 'RuntimeType' is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#disable_vpc_peering GoogleApigeeOrganization#disable_vpc_peering}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#display_name GoogleApigeeOrganization#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#id GoogleApigeeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.properties"></a>

```go
Properties GoogleApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#properties GoogleApigeeOrganization#properties}

---

##### `Retention`<sup>Optional</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.retention"></a>

```go
Retention *string
```

- *Type:* *string

Optional.

This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored. Default value: "DELETION_RETENTION_UNSPECIFIED" Possible values: ["DELETION_RETENTION_UNSPECIFIED", "MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#retention GoogleApigeeOrganization#retention}

---

##### `RuntimeDatabaseEncryptionKeyName`<sup>Optional</sup> <a name="RuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName"></a>

```go
RuntimeDatabaseEncryptionKeyName *string
```

- *Type:* *string

Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.

Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#runtime_database_encryption_key_name GoogleApigeeOrganization#runtime_database_encryption_key_name}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeType"></a>

```go
RuntimeType *string
```

- *Type:* *string

Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#runtime_type GoogleApigeeOrganization#runtime_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeOrganizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#timeouts GoogleApigeeOrganization#timeouts}

---

### GoogleApigeeOrganizationProperties <a name="GoogleApigeeOrganizationProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

&googleapigeeorganization.GoogleApigeeOrganizationProperties {
	Property: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.property.property">Property</a></code> | <code>interface{}</code> | property block. |

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.property.property"></a>

```go
Property interface{}
```

- *Type:* interface{}

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#property GoogleApigeeOrganization#property}

---

### GoogleApigeeOrganizationPropertiesProperty <a name="GoogleApigeeOrganizationPropertiesProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

&googleapigeeorganization.GoogleApigeeOrganizationPropertiesProperty {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.name">Name</a></code> | <code>*string</code> | Name of the property. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.value">Value</a></code> | <code>*string</code> | Value of the property. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#name GoogleApigeeOrganization#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#value GoogleApigeeOrganization#value}

---

### GoogleApigeeOrganizationTimeouts <a name="GoogleApigeeOrganizationTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

&googleapigeeorganization.GoogleApigeeOrganizationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#create GoogleApigeeOrganization#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#delete GoogleApigeeOrganization#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#update GoogleApigeeOrganization#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#create GoogleApigeeOrganization#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#delete GoogleApigeeOrganization#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apigee_organization#update GoogleApigeeOrganization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeOrganizationPropertiesOutputReference <a name="GoogleApigeeOrganizationPropertiesOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.NewGoogleApigeeOrganizationPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeOrganizationPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperty` <a name="PutProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty"></a>

```go
func PutProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resetProperty"></a>

```go
func ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.property">Property</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList">GoogleApigeeOrganizationPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.propertyInput">PropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.property"></a>

```go
func Property() GoogleApigeeOrganizationPropertiesPropertyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList">GoogleApigeeOrganizationPropertiesPropertyList</a>

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.propertyInput"></a>

```go
func PropertyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---


### GoogleApigeeOrganizationPropertiesPropertyList <a name="GoogleApigeeOrganizationPropertiesPropertyList" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.NewGoogleApigeeOrganizationPropertiesPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApigeeOrganizationPropertiesPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get"></a>

```go
func Get(index *f64) GoogleApigeeOrganizationPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeOrganizationPropertiesPropertyOutputReference <a name="GoogleApigeeOrganizationPropertiesPropertyOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.NewGoogleApigeeOrganizationPropertiesPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApigeeOrganizationPropertiesPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeOrganizationTimeoutsOutputReference <a name="GoogleApigeeOrganizationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleapigeeorganization"

googleapigeeorganization.NewGoogleApigeeOrganizationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeOrganizationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



