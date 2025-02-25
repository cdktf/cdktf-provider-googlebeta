# `googleKmsCryptoKey` Submodule <a name="`googleKmsCryptoKey` Submodule" id="@cdktf/provider-google-beta.googleKmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsCryptoKey <a name="GoogleKmsCryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.NewGoogleKmsCryptoKey(scope Construct, id *string, config GoogleKmsCryptoKeyConfig) GoogleKmsCryptoKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig">GoogleKmsCryptoKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig">GoogleKmsCryptoKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy">PutKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate">PutVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetCryptoKeyBackend">ResetCryptoKeyBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration">ResetDestroyScheduledDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly">ResetImportOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetKeyAccessJustificationsPolicy">ResetKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation">ResetSkipInitialVersionCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate">ResetVersionTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyAccessJustificationsPolicy` <a name="PutKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy"></a>

```go
func PutKeyAccessJustificationsPolicy(value GoogleKmsCryptoKeyKeyAccessJustificationsPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putKeyAccessJustificationsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts"></a>

```go
func PutTimeouts(value GoogleKmsCryptoKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---

##### `PutVersionTemplate` <a name="PutVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate"></a>

```go
func PutVersionTemplate(value GoogleKmsCryptoKeyVersionTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `ResetCryptoKeyBackend` <a name="ResetCryptoKeyBackend" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetCryptoKeyBackend"></a>

```go
func ResetCryptoKeyBackend()
```

##### `ResetDestroyScheduledDuration` <a name="ResetDestroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration"></a>

```go
func ResetDestroyScheduledDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId"></a>

```go
func ResetId()
```

##### `ResetImportOnly` <a name="ResetImportOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly"></a>

```go
func ResetImportOnly()
```

##### `ResetKeyAccessJustificationsPolicy` <a name="ResetKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetKeyAccessJustificationsPolicy"></a>

```go
func ResetKeyAccessJustificationsPolicy()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose"></a>

```go
func ResetPurpose()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

##### `ResetSkipInitialVersionCreation` <a name="ResetSkipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation"></a>

```go
func ResetSkipInitialVersionCreation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionTemplate` <a name="ResetVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate"></a>

```go
func ResetVersionTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsCryptoKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.GoogleKmsCryptoKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.GoogleKmsCryptoKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.GoogleKmsCryptoKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.GoogleKmsCryptoKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleKmsCryptoKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleKmsCryptoKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleKmsCryptoKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsCryptoKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicy">KeyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference">GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList">GoogleKmsCryptoKeyPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackendInput">CryptoKeyBackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput">DestroyScheduledDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput">ImportOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicyInput">KeyAccessJustificationsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput">KeyRingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput">SkipInitialVersionCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput">VersionTemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackend">CryptoKeyBackend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly">ImportOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing">KeyRing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `KeyAccessJustificationsPolicy`<sup>Required</sup> <a name="KeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicy"></a>

```go
func KeyAccessJustificationsPolicy() GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference">GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.primary"></a>

```go
func Primary() GoogleKmsCryptoKeyPrimaryList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList">GoogleKmsCryptoKeyPrimaryList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts"></a>

```go
func Timeouts() GoogleKmsCryptoKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a>

---

##### `VersionTemplate`<sup>Required</sup> <a name="VersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate"></a>

```go
func VersionTemplate() GoogleKmsCryptoKeyVersionTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a>

---

##### `CryptoKeyBackendInput`<sup>Optional</sup> <a name="CryptoKeyBackendInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackendInput"></a>

```go
func CryptoKeyBackendInput() *string
```

- *Type:* *string

---

##### `DestroyScheduledDurationInput`<sup>Optional</sup> <a name="DestroyScheduledDurationInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput"></a>

```go
func DestroyScheduledDurationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportOnlyInput`<sup>Optional</sup> <a name="ImportOnlyInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput"></a>

```go
func ImportOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAccessJustificationsPolicyInput`<sup>Optional</sup> <a name="KeyAccessJustificationsPolicyInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyAccessJustificationsPolicyInput"></a>

```go
func KeyAccessJustificationsPolicyInput() GoogleKmsCryptoKeyKeyAccessJustificationsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput"></a>

```go
func KeyRingInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *string
```

- *Type:* *string

---

##### `SkipInitialVersionCreationInput`<sup>Optional</sup> <a name="SkipInitialVersionCreationInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput"></a>

```go
func SkipInitialVersionCreationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionTemplateInput`<sup>Optional</sup> <a name="VersionTemplateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput"></a>

```go
func VersionTemplateInput() GoogleKmsCryptoKeyVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `CryptoKeyBackend`<sup>Required</sup> <a name="CryptoKeyBackend" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cryptoKeyBackend"></a>

```go
func CryptoKeyBackend() *string
```

- *Type:* *string

---

##### `DestroyScheduledDuration`<sup>Required</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration"></a>

```go
func DestroyScheduledDuration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportOnly`<sup>Required</sup> <a name="ImportOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly"></a>

```go
func ImportOnly() interface{}
```

- *Type:* interface{}

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing"></a>

```go
func KeyRing() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `SkipInitialVersionCreation`<sup>Required</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation"></a>

```go
func SkipInitialVersionCreation() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsCryptoKeyConfig <a name="GoogleKmsCryptoKeyConfig" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

&googlekmscryptokey.GoogleKmsCryptoKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyRing: *string,
	Name: *string,
	CryptoKeyBackend: *string,
	DestroyScheduledDuration: *string,
	Id: *string,
	ImportOnly: interface{},
	KeyAccessJustificationsPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy,
	Labels: *map[string]*string,
	Purpose: *string,
	RotationPeriod: *string,
	SkipInitialVersionCreation: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts,
	VersionTemplate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing">KeyRing</a></code> | <code>*string</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name">Name</a></code> | <code>*string</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.cryptoKeyBackend">CryptoKeyBackend</a></code> | <code>*string</code> | The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>*string</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly">ImportOnly</a></code> | <code>interface{}</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyAccessJustificationsPolicy">KeyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | key_access_justifications_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose">Purpose</a></code> | <code>*string</code> | The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>interface{}</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing"></a>

```go
KeyRing *string
```

- *Type:* *string

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#key_ring GoogleKmsCryptoKey#key_ring}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#name GoogleKmsCryptoKey#name}

---

##### `CryptoKeyBackend`<sup>Optional</sup> <a name="CryptoKeyBackend" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.cryptoKeyBackend"></a>

```go
CryptoKeyBackend *string
```

- *Type:* *string

The resource name of the backend environment associated with all CryptoKeyVersions within this CryptoKey.

The resource name is in the format "projects/* /locations/* /ekmConnections/*" and only applies to "EXTERNAL_VPC" keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#crypto_key_backend GoogleKmsCryptoKey#crypto_key_backend}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `DestroyScheduledDuration`<sup>Optional</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration"></a>

```go
DestroyScheduledDuration *string
```

- *Type:* *string

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#destroy_scheduled_duration GoogleKmsCryptoKey#destroy_scheduled_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportOnly`<sup>Optional</sup> <a name="ImportOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly"></a>

```go
ImportOnly interface{}
```

- *Type:* interface{}

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#import_only GoogleKmsCryptoKey#import_only}

---

##### `KeyAccessJustificationsPolicy`<sup>Optional</sup> <a name="KeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyAccessJustificationsPolicy"></a>

```go
KeyAccessJustificationsPolicy GoogleKmsCryptoKeyKeyAccessJustificationsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

key_access_justifications_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#key_access_justifications_policy GoogleKmsCryptoKey#key_access_justifications_policy}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels with user-defined metadata to apply to this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#labels GoogleKmsCryptoKey#labels}

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

The immutable purpose of this CryptoKey. See the [purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose) for possible inputs. Default value is "ENCRYPT_DECRYPT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#purpose GoogleKmsCryptoKey#purpose}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod"></a>

```go
RotationPeriod *string
```

- *Type:* *string

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#rotation_period GoogleKmsCryptoKey#rotation_period}

---

##### `SkipInitialVersionCreation`<sup>Optional</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation"></a>

```go
SkipInitialVersionCreation interface{}
```

- *Type:* interface{}

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_crypto_key_version' resource to create a new CryptoKeyVersion
or 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#skip_initial_version_creation GoogleKmsCryptoKey#skip_initial_version_creation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts"></a>

```go
Timeouts GoogleKmsCryptoKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#timeouts GoogleKmsCryptoKey#timeouts}

---

##### `VersionTemplate`<sup>Optional</sup> <a name="VersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate"></a>

```go
VersionTemplate GoogleKmsCryptoKeyVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#version_template GoogleKmsCryptoKey#version_template}

---

### GoogleKmsCryptoKeyKeyAccessJustificationsPolicy <a name="GoogleKmsCryptoKeyKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

&googlekmscryptokey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy {
	AllowedAccessReasons: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>*[]*string</code> | The list of allowed reasons for access to this CryptoKey. |

---

##### `AllowedAccessReasons`<sup>Optional</sup> <a name="AllowedAccessReasons" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy.property.allowedAccessReasons"></a>

```go
AllowedAccessReasons *[]*string
```

- *Type:* *[]*string

The list of allowed reasons for access to this CryptoKey.

Zero allowed
access reasons means all encrypt, decrypt, and sign operations for
this CryptoKey will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#allowed_access_reasons GoogleKmsCryptoKey#allowed_access_reasons}

---

### GoogleKmsCryptoKeyPrimary <a name="GoogleKmsCryptoKeyPrimary" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

&googlekmscryptokey.GoogleKmsCryptoKeyPrimary {

}
```


### GoogleKmsCryptoKeyTimeouts <a name="GoogleKmsCryptoKeyTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

&googlekmscryptokey.GoogleKmsCryptoKeyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}.

---

### GoogleKmsCryptoKeyVersionTemplate <a name="GoogleKmsCryptoKeyVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

&googlekmscryptokey.GoogleKmsCryptoKeyVersionTemplate {
	Algorithm: *string,
	ProtectionLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm">Algorithm</a></code> | <code>*string</code> | The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | The protection level to use when creating a version based on this template. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#algorithm GoogleKmsCryptoKey#algorithm}

---

##### `ProtectionLevel`<sup>Optional</sup> <a name="ProtectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel"></a>

```go
ProtectionLevel *string
```

- *Type:* *string

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_kms_crypto_key#protection_level GoogleKmsCryptoKey#protection_level}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference <a name="GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.NewGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resetAllowedAccessReasons">ResetAllowedAccessReasons</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAccessReasons` <a name="ResetAllowedAccessReasons" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resetAllowedAccessReasons"></a>

```go
func ResetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasonsInput">AllowedAccessReasonsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAccessReasonsInput`<sup>Optional</sup> <a name="AllowedAccessReasonsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```go
func AllowedAccessReasonsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons"></a>

```go
func AllowedAccessReasons() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleKmsCryptoKeyKeyAccessJustificationsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyKeyAccessJustificationsPolicy">GoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---


### GoogleKmsCryptoKeyPrimaryList <a name="GoogleKmsCryptoKeyPrimaryList" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.NewGoogleKmsCryptoKeyPrimaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleKmsCryptoKeyPrimaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get"></a>

```go
func Get(index *f64) GoogleKmsCryptoKeyPrimaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleKmsCryptoKeyPrimaryOutputReference <a name="GoogleKmsCryptoKeyPrimaryOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.NewGoogleKmsCryptoKeyPrimaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleKmsCryptoKeyPrimaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary">GoogleKmsCryptoKeyPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleKmsCryptoKeyPrimary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyPrimary">GoogleKmsCryptoKeyPrimary</a>

---


### GoogleKmsCryptoKeyTimeoutsOutputReference <a name="GoogleKmsCryptoKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.NewGoogleKmsCryptoKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleKmsCryptoKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleKmsCryptoKeyVersionTemplateOutputReference <a name="GoogleKmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlekmscryptokey"

googlekmscryptokey.NewGoogleKmsCryptoKeyVersionTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleKmsCryptoKeyVersionTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel">ResetProtectionLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtectionLevel` <a name="ResetProtectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel"></a>

```go
func ResetProtectionLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput">ProtectionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `ProtectionLevelInput`<sup>Optional</sup> <a name="ProtectionLevelInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput"></a>

```go
func ProtectionLevelInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```go
func ProtectionLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleKmsCryptoKeyVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---



