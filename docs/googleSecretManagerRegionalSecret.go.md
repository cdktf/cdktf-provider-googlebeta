# `googleSecretManagerRegionalSecret` Submodule <a name="`googleSecretManagerRegionalSecret` Submodule" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecret <a name="GoogleSecretManagerRegionalSecret" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.NewGoogleSecretManagerRegionalSecret(scope Construct, id *string, config GoogleSecretManagerRegionalSecretConfig) GoogleSecretManagerRegionalSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig">GoogleSecretManagerRegionalSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig">GoogleSecretManagerRegionalSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption">PutCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation">PutRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics">PutTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetCustomerManagedEncryption">ResetCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetRotation">ResetRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionDestroyTtl">ResetVersionDestroyTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedEncryption` <a name="PutCustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption"></a>

```go
func PutCustomerManagedEncryption(value GoogleSecretManagerRegionalSecretCustomerManagedEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `PutRotation` <a name="PutRotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation"></a>

```go
func PutRotation(value GoogleSecretManagerRegionalSecretRotation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSecretManagerRegionalSecretTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>

---

##### `PutTopics` <a name="PutTopics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics"></a>

```go
func PutTopics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCustomerManagedEncryption` <a name="ResetCustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetCustomerManagedEncryption"></a>

```go
func ResetCustomerManagedEncryption()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRotation` <a name="ResetRotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetRotation"></a>

```go
func ResetRotation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTopics"></a>

```go
func ResetTopics()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionAliases"></a>

```go
func ResetVersionAliases()
```

##### `ResetVersionDestroyTtl` <a name="ResetVersionDestroyTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionDestroyTtl"></a>

```go
func ResetVersionDestroyTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSecretManagerRegionalSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference">GoogleSecretManagerRegionalSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference">GoogleSecretManagerRegionalSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList">GoogleSecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryptionInput">CustomerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotationInput">RotationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topicsInput">TopicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtlInput">VersionDestroyTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliases">VersionAliases</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```go
func CustomerManagedEncryption() GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotation"></a>

```go
func Rotation() GoogleSecretManagerRegionalSecretRotationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference">GoogleSecretManagerRegionalSecretRotationOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeouts"></a>

```go
func Timeouts() GoogleSecretManagerRegionalSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference">GoogleSecretManagerRegionalSecretTimeoutsOutputReference</a>

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topics"></a>

```go
func Topics() GoogleSecretManagerRegionalSecretTopicsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList">GoogleSecretManagerRegionalSecretTopicsList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerManagedEncryptionInput`<sup>Optional</sup> <a name="CustomerManagedEncryptionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryptionInput"></a>

```go
func CustomerManagedEncryptionInput() GoogleSecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RotationInput`<sup>Optional</sup> <a name="RotationInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotationInput"></a>

```go
func RotationInput() GoogleSecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topicsInput"></a>

```go
func TopicsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliasesInput"></a>

```go
func VersionAliasesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionDestroyTtlInput`<sup>Optional</sup> <a name="VersionDestroyTtlInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtlInput"></a>

```go
func VersionDestroyTtlInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliases"></a>

```go
func VersionAliases() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionDestroyTtl`<sup>Required</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```go
func VersionDestroyTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretConfig <a name="GoogleSecretManagerRegionalSecretConfig" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

&googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	SecretId: *string,
	Annotations: *map[string]*string,
	CustomerManagedEncryption: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption,
	ExpireTime: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Rotation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts,
	Topics: interface{},
	Ttl: *string,
	VersionAliases: *map[string]*string,
	VersionDestroyTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.location">Location</a></code> | <code>*string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.secretId">SecretId</a></code> | <code>*string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Custom metadata about the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | customer_managed_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.expireTime">ExpireTime</a></code> | <code>*string</code> | Timestamp in UTC when the regional secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels assigned to this regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.topics">Topics</a></code> | <code>interface{}</code> | topics block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL for the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionAliases">VersionAliases</a></code> | <code>*map[string]*string</code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>*string</code> | Secret Version TTL after destruction request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#location GoogleSecretManagerRegionalSecret#location}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#secret_id GoogleSecretManagerRegionalSecret#secret_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Custom metadata about the regional secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#annotations GoogleSecretManagerRegionalSecret#annotations}

---

##### `CustomerManagedEncryption`<sup>Optional</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.customerManagedEncryption"></a>

```go
CustomerManagedEncryption GoogleSecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#customer_managed_encryption GoogleSecretManagerRegionalSecret#customer_managed_encryption}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

Timestamp in UTC when the regional secret is scheduled to expire.

This is always provided on
output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#expire_time GoogleSecretManagerRegionalSecret#expire_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels assigned to this regional secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#labels GoogleSecretManagerRegionalSecret#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}.

---

##### `Rotation`<sup>Optional</sup> <a name="Rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.rotation"></a>

```go
Rotation GoogleSecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#rotation GoogleSecretManagerRegionalSecret#rotation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.timeouts"></a>

```go
Timeouts GoogleSecretManagerRegionalSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#timeouts GoogleSecretManagerRegionalSecret#timeouts}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.topics"></a>

```go
Topics interface{}
```

- *Type:* interface{}

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#topics GoogleSecretManagerRegionalSecret#topics}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL for the regional secret.

A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#ttl GoogleSecretManagerRegionalSecret#ttl}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionAliases"></a>

```go
VersionAliases *map[string]*string
```

- *Type:* *map[string]*string

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#version_aliases GoogleSecretManagerRegionalSecret#version_aliases}

---

##### `VersionDestroyTtl`<sup>Optional</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionDestroyTtl"></a>

```go
VersionDestroyTtl *string
```

- *Type:* *string

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires. It must be atleast 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#version_destroy_ttl GoogleSecretManagerRegionalSecret#version_destroy_ttl}

---

### GoogleSecretManagerRegionalSecretCustomerManagedEncryption <a name="GoogleSecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

&googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#kms_key_name GoogleSecretManagerRegionalSecret#kms_key_name}

---

### GoogleSecretManagerRegionalSecretRotation <a name="GoogleSecretManagerRegionalSecretRotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

&googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecretRotation {
	NextRotationTime: *string,
	RotationPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | The Duration between rotation notifications. |

---

##### `NextRotationTime`<sup>Optional</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.nextRotationTime"></a>

```go
NextRotationTime *string
```

- *Type:* *string

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#next_rotation_time GoogleSecretManagerRegionalSecret#next_rotation_time}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.rotationPeriod"></a>

```go
RotationPeriod *string
```

- *Type:* *string

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h)
and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
be set. 'next_rotation_time' will be advanced by this period when the service
automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#rotation_period GoogleSecretManagerRegionalSecret#rotation_period}

---

### GoogleSecretManagerRegionalSecretTimeouts <a name="GoogleSecretManagerRegionalSecretTimeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

&googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecretTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#create GoogleSecretManagerRegionalSecret#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#delete GoogleSecretManagerRegionalSecret#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#update GoogleSecretManagerRegionalSecret#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#create GoogleSecretManagerRegionalSecret#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#delete GoogleSecretManagerRegionalSecret#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#update GoogleSecretManagerRegionalSecret#update}.

---

### GoogleSecretManagerRegionalSecretTopics <a name="GoogleSecretManagerRegionalSecretTopics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

&googlesecretmanagerregionalsecret.GoogleSecretManagerRegionalSecretTopics {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.property.name">Name</a></code> | <code>*string</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service
Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_secret_manager_regional_secret#name GoogleSecretManagerRegionalSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.NewGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### GoogleSecretManagerRegionalSecretRotationOutputReference <a name="GoogleSecretManagerRegionalSecretRotationOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.NewGoogleSecretManagerRegionalSecretRotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecretManagerRegionalSecretRotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime">ResetNextRotationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNextRotationTime` <a name="ResetNextRotationTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime"></a>

```go
func ResetNextRotationTime()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput">NextRotationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextRotationTimeInput`<sup>Optional</sup> <a name="NextRotationTimeInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```go
func NextRotationTimeInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *string
```

- *Type:* *string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```go
func NextRotationTime() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---


### GoogleSecretManagerRegionalSecretTimeoutsOutputReference <a name="GoogleSecretManagerRegionalSecretTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.NewGoogleSecretManagerRegionalSecretTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecretManagerRegionalSecretTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSecretManagerRegionalSecretTopicsList <a name="GoogleSecretManagerRegionalSecretTopicsList" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.NewGoogleSecretManagerRegionalSecretTopicsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSecretManagerRegionalSecretTopicsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get"></a>

```go
func Get(index *f64) GoogleSecretManagerRegionalSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSecretManagerRegionalSecretTopicsOutputReference <a name="GoogleSecretManagerRegionalSecretTopicsOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesecretmanagerregionalsecret"

googlesecretmanagerregionalsecret.NewGoogleSecretManagerRegionalSecretTopicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSecretManagerRegionalSecretTopicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



