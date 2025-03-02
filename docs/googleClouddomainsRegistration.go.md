# `googleClouddomainsRegistration` Submodule <a name="`googleClouddomainsRegistration` Submodule" id="@cdktf/provider-google-beta.googleClouddomainsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddomainsRegistration <a name="GoogleClouddomainsRegistration" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration google_clouddomains_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistration(scope Construct, id *string, config GoogleClouddomainsRegistrationConfig) GoogleClouddomainsRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig">GoogleClouddomainsRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig">GoogleClouddomainsRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings">PutContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings">PutDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings">PutManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice">PutYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetContactNotices">ResetContactNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDnsSettings">ResetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDomainNotices">ResetDomainNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetManagementSettings">ResetManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContactSettings` <a name="PutContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings"></a>

```go
func PutContactSettings(value GoogleClouddomainsRegistrationContactSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---

##### `PutDnsSettings` <a name="PutDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings"></a>

```go
func PutDnsSettings(value GoogleClouddomainsRegistrationDnsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---

##### `PutManagementSettings` <a name="PutManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings"></a>

```go
func PutManagementSettings(value GoogleClouddomainsRegistrationManagementSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts"></a>

```go
func PutTimeouts(value GoogleClouddomainsRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

---

##### `PutYearlyPrice` <a name="PutYearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice"></a>

```go
func PutYearlyPrice(value GoogleClouddomainsRegistrationYearlyPrice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---

##### `ResetContactNotices` <a name="ResetContactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetContactNotices"></a>

```go
func ResetContactNotices()
```

##### `ResetDnsSettings` <a name="ResetDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDnsSettings"></a>

```go
func ResetDnsSettings()
```

##### `ResetDomainNotices` <a name="ResetDomainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDomainNotices"></a>

```go
func ResetDomainNotices()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetManagementSettings` <a name="ResetManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetManagementSettings"></a>

```go
func ResetManagementSettings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddomainsRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.GoogleClouddomainsRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.GoogleClouddomainsRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.GoogleClouddomainsRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.GoogleClouddomainsRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleClouddomainsRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleClouddomainsRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleClouddomainsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddomainsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettings">ContactSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference">GoogleClouddomainsRegistrationContactSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference">GoogleClouddomainsRegistrationDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.issues">Issues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettings">ManagementSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference">GoogleClouddomainsRegistrationManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.registerFailureReason">RegisterFailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.supportedPrivacy">SupportedPrivacy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference">GoogleClouddomainsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPrice">YearlyPrice</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference">GoogleClouddomainsRegistrationYearlyPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNoticesInput">ContactNoticesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettingsInput">ContactSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettingsInput">DnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNoticesInput">DomainNoticesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettingsInput">ManagementSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPriceInput">YearlyPriceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNotices">ContactNotices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNotices">DomainNotices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactSettings`<sup>Required</sup> <a name="ContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettings"></a>

```go
func ContactSettings() GoogleClouddomainsRegistrationContactSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference">GoogleClouddomainsRegistrationContactSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DnsSettings`<sup>Required</sup> <a name="DnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettings"></a>

```go
func DnsSettings() GoogleClouddomainsRegistrationDnsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference">GoogleClouddomainsRegistrationDnsSettingsOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.issues"></a>

```go
func Issues() *[]*string
```

- *Type:* *[]*string

---

##### `ManagementSettings`<sup>Required</sup> <a name="ManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettings"></a>

```go
func ManagementSettings() GoogleClouddomainsRegistrationManagementSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference">GoogleClouddomainsRegistrationManagementSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegisterFailureReason`<sup>Required</sup> <a name="RegisterFailureReason" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.registerFailureReason"></a>

```go
func RegisterFailureReason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportedPrivacy`<sup>Required</sup> <a name="SupportedPrivacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.supportedPrivacy"></a>

```go
func SupportedPrivacy() *[]*string
```

- *Type:* *[]*string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeouts"></a>

```go
func Timeouts() GoogleClouddomainsRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference">GoogleClouddomainsRegistrationTimeoutsOutputReference</a>

---

##### `YearlyPrice`<sup>Required</sup> <a name="YearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPrice"></a>

```go
func YearlyPrice() GoogleClouddomainsRegistrationYearlyPriceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference">GoogleClouddomainsRegistrationYearlyPriceOutputReference</a>

---

##### `ContactNoticesInput`<sup>Optional</sup> <a name="ContactNoticesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNoticesInput"></a>

```go
func ContactNoticesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContactSettingsInput`<sup>Optional</sup> <a name="ContactSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettingsInput"></a>

```go
func ContactSettingsInput() GoogleClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---

##### `DnsSettingsInput`<sup>Optional</sup> <a name="DnsSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettingsInput"></a>

```go
func DnsSettingsInput() GoogleClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `DomainNoticesInput`<sup>Optional</sup> <a name="DomainNoticesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNoticesInput"></a>

```go
func DomainNoticesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagementSettingsInput`<sup>Optional</sup> <a name="ManagementSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettingsInput"></a>

```go
func ManagementSettingsInput() GoogleClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `YearlyPriceInput`<sup>Optional</sup> <a name="YearlyPriceInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPriceInput"></a>

```go
func YearlyPriceInput() GoogleClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---

##### `ContactNotices`<sup>Required</sup> <a name="ContactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNotices"></a>

```go
func ContactNotices() *[]*string
```

- *Type:* *[]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DomainNotices`<sup>Required</sup> <a name="DomainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNotices"></a>

```go
func DomainNotices() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddomainsRegistrationConfig <a name="GoogleClouddomainsRegistrationConfig" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContactSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings,
	DomainName: *string,
	Location: *string,
	YearlyPrice: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice,
	ContactNotices: *[]*string,
	DnsSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings,
	DomainNotices: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	ManagementSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactSettings">ContactSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.yearlyPrice">YearlyPrice</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactNotices">ContactNotices</a></code> | <code>*[]*string</code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainNotices">DomainNotices</a></code> | <code>*[]*string</code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.managementSettings">ManagementSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactSettings`<sup>Required</sup> <a name="ContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactSettings"></a>

```go
ContactSettings GoogleClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#contact_settings GoogleClouddomainsRegistration#contact_settings}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#domain_name GoogleClouddomainsRegistration#domain_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#location GoogleClouddomainsRegistration#location}

---

##### `YearlyPrice`<sup>Required</sup> <a name="YearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.yearlyPrice"></a>

```go
YearlyPrice GoogleClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#yearly_price GoogleClouddomainsRegistration#yearly_price}

---

##### `ContactNotices`<sup>Optional</sup> <a name="ContactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactNotices"></a>

```go
ContactNotices *[]*string
```

- *Type:* *[]*string

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#contact_notices GoogleClouddomainsRegistration#contact_notices}

---

##### `DnsSettings`<sup>Optional</sup> <a name="DnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dnsSettings"></a>

```go
DnsSettings GoogleClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#dns_settings GoogleClouddomainsRegistration#dns_settings}

---

##### `DomainNotices`<sup>Optional</sup> <a name="DomainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainNotices"></a>

```go
DomainNotices *[]*string
```

- *Type:* *[]*string

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#domain_notices GoogleClouddomainsRegistration#domain_notices}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#labels GoogleClouddomainsRegistration#labels}

---

##### `ManagementSettings`<sup>Optional</sup> <a name="ManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.managementSettings"></a>

```go
ManagementSettings GoogleClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#management_settings GoogleClouddomainsRegistration#management_settings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.timeouts"></a>

```go
Timeouts GoogleClouddomainsRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#timeouts GoogleClouddomainsRegistration#timeouts}

---

### GoogleClouddomainsRegistrationContactSettings <a name="GoogleClouddomainsRegistrationContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationContactSettings {
	AdminContact: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact,
	Privacy: *string,
	RegistrantContact: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact,
	TechnicalContact: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.privacy">Privacy</a></code> | <code>*string</code> | Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.technicalContact">TechnicalContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | technical_contact block. |

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.adminContact"></a>

```go
AdminContact GoogleClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#admin_contact GoogleClouddomainsRegistration#admin_contact}

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.privacy"></a>

```go
Privacy *string
```

- *Type:* *string

Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#privacy GoogleClouddomainsRegistration#privacy}

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.registrantContact"></a>

```go
RegistrantContact GoogleClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#registrant_contact GoogleClouddomainsRegistration#registrant_contact}

---

##### `TechnicalContact`<sup>Required</sup> <a name="TechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.technicalContact"></a>

```go
TechnicalContact GoogleClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

technical_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#technical_contact GoogleClouddomainsRegistration#technical_contact}

---

### GoogleClouddomainsRegistrationContactSettingsAdminContact <a name="GoogleClouddomainsRegistrationContactSettingsAdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationContactSettingsAdminContact {
	Email: *string,
	PhoneNumber: *string,
	PostalAddress: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress,
	FaxNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.email">Email</a></code> | <code>*string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress"></a>

```go
PostalAddress GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber"></a>

```go
FaxNumber *string
```

- *Type:* *string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress {
	RegionCode: *string,
	AddressLines: *[]*string,
	AdministrativeArea: *string,
	Locality: *string,
	Organization: *string,
	PostalCode: *string,
	Recipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality">Locality</a></code> | <code>*string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization">Organization</a></code> | <code>*string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients">Recipients</a></code> | <code>*[]*string</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode"></a>

```go
RegionCode *string
```

- *Type:* *string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines"></a>

```go
AddressLines *[]*string
```

- *Type:* *[]*string

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea"></a>

```go
AdministrativeArea *string
```

- *Type:* *string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationContactSettingsRegistrantContact <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact {
	Email: *string,
	PhoneNumber: *string,
	PostalAddress: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress,
	FaxNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.email">Email</a></code> | <code>*string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress"></a>

```go
PostalAddress GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber"></a>

```go
FaxNumber *string
```

- *Type:* *string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress {
	RegionCode: *string,
	AddressLines: *[]*string,
	AdministrativeArea: *string,
	Locality: *string,
	Organization: *string,
	PostalCode: *string,
	Recipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality">Locality</a></code> | <code>*string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization">Organization</a></code> | <code>*string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients">Recipients</a></code> | <code>*[]*string</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode"></a>

```go
RegionCode *string
```

- *Type:* *string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines"></a>

```go
AddressLines *[]*string
```

- *Type:* *[]*string

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea"></a>

```go
AdministrativeArea *string
```

- *Type:* *string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationContactSettingsTechnicalContact <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact {
	Email: *string,
	PhoneNumber: *string,
	PostalAddress: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress,
	FaxNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.email">Email</a></code> | <code>*string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress"></a>

```go
PostalAddress GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber"></a>

```go
FaxNumber *string
```

- *Type:* *string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress {
	RegionCode: *string,
	AddressLines: *[]*string,
	AdministrativeArea: *string,
	Locality: *string,
	Organization: *string,
	PostalCode: *string,
	Recipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality">Locality</a></code> | <code>*string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization">Organization</a></code> | <code>*string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients">Recipients</a></code> | <code>*[]*string</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode"></a>

```go
RegionCode *string
```

- *Type:* *string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines"></a>

```go
AddressLines *[]*string
```

- *Type:* *[]*string

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea"></a>

```go
AdministrativeArea *string
```

- *Type:* *string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationDnsSettings <a name="GoogleClouddomainsRegistrationDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationDnsSettings {
	CustomDns: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns,
	GlueRecords: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.customDns">CustomDns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | custom_dns block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.glueRecords">GlueRecords</a></code> | <code>interface{}</code> | glue_records block. |

---

##### `CustomDns`<sup>Optional</sup> <a name="CustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.customDns"></a>

```go
CustomDns GoogleClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

custom_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#custom_dns GoogleClouddomainsRegistration#custom_dns}

---

##### `GlueRecords`<sup>Optional</sup> <a name="GlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.glueRecords"></a>

```go
GlueRecords interface{}
```

- *Type:* interface{}

glue_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#glue_records GoogleClouddomainsRegistration#glue_records}

---

### GoogleClouddomainsRegistrationDnsSettingsCustomDns <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns {
	NameServers: *[]*string,
	DsRecords: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords">DsRecords</a></code> | <code>interface{}</code> | ds_records block. |

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers"></a>

```go
NameServers *[]*string
```

- *Type:* *[]*string

Required.

A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#name_servers GoogleClouddomainsRegistration#name_servers}

---

##### `DsRecords`<sup>Optional</sup> <a name="DsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords"></a>

```go
DsRecords interface{}
```

- *Type:* interface{}

ds_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#ds_records GoogleClouddomainsRegistration#ds_records}

---

### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords {
	Algorithm: *string,
	Digest: *string,
	DigestType: *string,
	KeyTag: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm">Algorithm</a></code> | <code>*string</code> | The algorithm used to generate the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest">Digest</a></code> | <code>*string</code> | The digest generated from the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType">DigestType</a></code> | <code>*string</code> | The hash function used to generate the digest of the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag">KeyTag</a></code> | <code>*f64</code> | The key tag of the record. Must be set in range 0 -- 65535. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The algorithm used to generate the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#algorithm GoogleClouddomainsRegistration#algorithm}

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

The digest generated from the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#digest GoogleClouddomainsRegistration#digest}

---

##### `DigestType`<sup>Optional</sup> <a name="DigestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType"></a>

```go
DigestType *string
```

- *Type:* *string

The hash function used to generate the digest of the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#digest_type GoogleClouddomainsRegistration#digest_type}

---

##### `KeyTag`<sup>Optional</sup> <a name="KeyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag"></a>

```go
KeyTag *f64
```

- *Type:* *f64

The key tag of the record. Must be set in range 0 -- 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#key_tag GoogleClouddomainsRegistration#key_tag}

---

### GoogleClouddomainsRegistrationDnsSettingsGlueRecords <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords {
	HostName: *string,
	Ipv4Addresses: *[]*string,
	Ipv6Addresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName">HostName</a></code> | <code>*string</code> | Required. Domain name of the host in Punycode format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Required. Domain name of the host in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#host_name GoogleClouddomainsRegistration#host_name}

---

##### `Ipv4Addresses`<sup>Optional</sup> <a name="Ipv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses"></a>

```go
Ipv4Addresses *[]*string
```

- *Type:* *[]*string

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#ipv4_addresses GoogleClouddomainsRegistration#ipv4_addresses}

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses"></a>

```go
Ipv6Addresses *[]*string
```

- *Type:* *[]*string

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#ipv6_addresses GoogleClouddomainsRegistration#ipv6_addresses}

---

### GoogleClouddomainsRegistrationManagementSettings <a name="GoogleClouddomainsRegistrationManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationManagementSettings {
	PreferredRenewalMethod: *string,
	TransferLockState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod">PreferredRenewalMethod</a></code> | <code>*string</code> | The desired renewal method for this Registration. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.transferLockState">TransferLockState</a></code> | <code>*string</code> | Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED. |

---

##### `PreferredRenewalMethod`<sup>Optional</sup> <a name="PreferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod"></a>

```go
PreferredRenewalMethod *string
```

- *Type:* *string

The desired renewal method for this Registration.

The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.

When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#preferred_renewal_method GoogleClouddomainsRegistration#preferred_renewal_method}

---

##### `TransferLockState`<sup>Optional</sup> <a name="TransferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.transferLockState"></a>

```go
TransferLockState *string
```

- *Type:* *string

Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#transfer_lock_state GoogleClouddomainsRegistration#transfer_lock_state}

---

### GoogleClouddomainsRegistrationTimeouts <a name="GoogleClouddomainsRegistrationTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#create GoogleClouddomainsRegistration#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#delete GoogleClouddomainsRegistration#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#update GoogleClouddomainsRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#create GoogleClouddomainsRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#delete GoogleClouddomainsRegistration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#update GoogleClouddomainsRegistration#update}.

---

### GoogleClouddomainsRegistrationYearlyPrice <a name="GoogleClouddomainsRegistrationYearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

&googleclouddomainsregistration.GoogleClouddomainsRegistrationYearlyPrice {
	CurrencyCode: *string,
	Units: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | The three-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.units">Units</a></code> | <code>*string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.currencyCode"></a>

```go
CurrencyCode *string
```

- *Type:* *string

The three-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#currency_code GoogleClouddomainsRegistration#currency_code}

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.units"></a>

```go
Units *string
```

- *Type:* *string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_clouddomains_registration#units GoogleClouddomainsRegistration#units}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress"></a>

```go
func PutPostalAddress(value GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber"></a>

```go
func ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress"></a>

```go
func PostalAddress() GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput"></a>

```go
func FaxNumberInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput"></a>

```go
func PostalAddressInput() GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber"></a>

```go
func FaxNumber() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines"></a>

```go
func ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```go
func ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients"></a>

```go
func ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput"></a>

```go
func AddressLinesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```go
func AdministrativeAreaInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput"></a>

```go
func RegionCodeInput() *string
```

- *Type:* *string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines"></a>

```go
func AddressLines() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea"></a>

```go
func AdministrativeArea() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode"></a>

```go
func RegionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationContactSettingsOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationContactSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationContactSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact">PutAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact">PutRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact">PutTechnicalContact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminContact` <a name="PutAdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact"></a>

```go
func PutAdminContact(value GoogleClouddomainsRegistrationContactSettingsAdminContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `PutRegistrantContact` <a name="PutRegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact"></a>

```go
func PutRegistrantContact(value GoogleClouddomainsRegistrationContactSettingsRegistrantContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `PutTechnicalContact` <a name="PutTechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact"></a>

```go
func PutTechnicalContact(value GoogleClouddomainsRegistrationContactSettingsTechnicalContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact">TechnicalContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput">AdminContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput">PrivacyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput">RegistrantContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput">TechnicalContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacy">Privacy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContact"></a>

```go
func AdminContact() GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference</a>

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact"></a>

```go
func RegistrantContact() GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a>

---

##### `TechnicalContact`<sup>Required</sup> <a name="TechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact"></a>

```go
func TechnicalContact() GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a>

---

##### `AdminContactInput`<sup>Optional</sup> <a name="AdminContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput"></a>

```go
func AdminContactInput() GoogleClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput"></a>

```go
func PrivacyInput() *string
```

- *Type:* *string

---

##### `RegistrantContactInput`<sup>Optional</sup> <a name="RegistrantContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput"></a>

```go
func RegistrantContactInput() GoogleClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `TechnicalContactInput`<sup>Optional</sup> <a name="TechnicalContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput"></a>

```go
func TechnicalContactInput() GoogleClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacy"></a>

```go
func Privacy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---


### GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress"></a>

```go
func PutPostalAddress(value GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber"></a>

```go
func ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress"></a>

```go
func PostalAddress() GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput"></a>

```go
func FaxNumberInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput"></a>

```go
func PostalAddressInput() GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber"></a>

```go
func FaxNumber() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines"></a>

```go
func ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```go
func ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients"></a>

```go
func ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput"></a>

```go
func AddressLinesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```go
func AdministrativeAreaInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput"></a>

```go
func RegionCodeInput() *string
```

- *Type:* *string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines"></a>

```go
func AddressLines() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea"></a>

```go
func AdministrativeArea() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode"></a>

```go
func RegionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress"></a>

```go
func PutPostalAddress(value GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber"></a>

```go
func ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress"></a>

```go
func PostalAddress() GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput"></a>

```go
func FaxNumberInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput"></a>

```go
func PostalAddressInput() GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber"></a>

```go
func FaxNumber() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines"></a>

```go
func ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```go
func ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients"></a>

```go
func ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput"></a>

```go
func AddressLinesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```go
func AdministrativeAreaInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput"></a>

```go
func RegionCodeInput() *string
```

- *Type:* *string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines"></a>

```go
func AddressLines() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea"></a>

```go
func AdministrativeArea() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode"></a>

```go
func RegionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get"></a>

```go
func Get(index *f64) GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType">ResetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag">ResetKeyTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest"></a>

```go
func ResetDigest()
```

##### `ResetDigestType` <a name="ResetDigestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType"></a>

```go
func ResetDigestType()
```

##### `ResetKeyTag` <a name="ResetKeyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag"></a>

```go
func ResetKeyTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput">DigestTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput">KeyTagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType">DigestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `DigestTypeInput`<sup>Optional</sup> <a name="DigestTypeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput"></a>

```go
func DigestTypeInput() *string
```

- *Type:* *string

---

##### `KeyTagInput`<sup>Optional</sup> <a name="KeyTagInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput"></a>

```go
func KeyTagInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType"></a>

```go
func DigestType() *string
```

- *Type:* *string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords">PutDsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords">ResetDsRecords</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDsRecords` <a name="PutDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords"></a>

```go
func PutDsRecords(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDsRecords` <a name="ResetDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords"></a>

```go
func ResetDsRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords">DsRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput">DsRecordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput">NameServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DsRecords`<sup>Required</sup> <a name="DsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords"></a>

```go
func DsRecords() GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a>

---

##### `DsRecordsInput`<sup>Optional</sup> <a name="DsRecordsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput"></a>

```go
func DsRecordsInput() interface{}
```

- *Type:* interface{}

---

##### `NameServersInput`<sup>Optional</sup> <a name="NameServersInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput"></a>

```go
func NameServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---


### GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationDnsSettingsGlueRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get"></a>

```go
func Get(index *f64) GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses">ResetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Addresses` <a name="ResetIpv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses"></a>

```go
func ResetIpv4Addresses()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses"></a>

```go
func ResetIpv6Addresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput">Ipv4AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressesInput`<sup>Optional</sup> <a name="Ipv4AddressesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput"></a>

```go
func Ipv4AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput"></a>

```go
func Ipv6AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses"></a>

```go
func Ipv4Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddomainsRegistrationDnsSettingsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationDnsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationDnsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns">PutCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords">PutGlueRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns">ResetCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords">ResetGlueRecords</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomDns` <a name="PutCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns"></a>

```go
func PutCustomDns(value GoogleClouddomainsRegistrationDnsSettingsCustomDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `PutGlueRecords` <a name="PutGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords"></a>

```go
func PutGlueRecords(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomDns` <a name="ResetCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns"></a>

```go
func ResetCustomDns()
```

##### `ResetGlueRecords` <a name="ResetGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords"></a>

```go
func ResetGlueRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDns">CustomDns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords">GlueRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList">GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput">CustomDnsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput">GlueRecordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomDns`<sup>Required</sup> <a name="CustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDns"></a>

```go
func CustomDns() GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a>

---

##### `GlueRecords`<sup>Required</sup> <a name="GlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords"></a>

```go
func GlueRecords() GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList">GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList</a>

---

##### `CustomDnsInput`<sup>Optional</sup> <a name="CustomDnsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput"></a>

```go
func CustomDnsInput() GoogleClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `GlueRecordsInput`<sup>Optional</sup> <a name="GlueRecordsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput"></a>

```go
func GlueRecordsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---


### GoogleClouddomainsRegistrationManagementSettingsOutputReference <a name="GoogleClouddomainsRegistrationManagementSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationManagementSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationManagementSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod">ResetPreferredRenewalMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState">ResetTransferLockState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredRenewalMethod` <a name="ResetPreferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod"></a>

```go
func ResetPreferredRenewalMethod()
```

##### `ResetTransferLockState` <a name="ResetTransferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState"></a>

```go
func ResetTransferLockState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod">RenewalMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput">PreferredRenewalMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput">TransferLockStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod">PreferredRenewalMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState">TransferLockState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenewalMethod`<sup>Required</sup> <a name="RenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod"></a>

```go
func RenewalMethod() *string
```

- *Type:* *string

---

##### `PreferredRenewalMethodInput`<sup>Optional</sup> <a name="PreferredRenewalMethodInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput"></a>

```go
func PreferredRenewalMethodInput() *string
```

- *Type:* *string

---

##### `TransferLockStateInput`<sup>Optional</sup> <a name="TransferLockStateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput"></a>

```go
func TransferLockStateInput() *string
```

- *Type:* *string

---

##### `PreferredRenewalMethod`<sup>Required</sup> <a name="PreferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod"></a>

```go
func PreferredRenewalMethod() *string
```

- *Type:* *string

---

##### `TransferLockState`<sup>Required</sup> <a name="TransferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState"></a>

```go
func TransferLockState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---


### GoogleClouddomainsRegistrationTimeoutsOutputReference <a name="GoogleClouddomainsRegistrationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleClouddomainsRegistrationYearlyPriceOutputReference <a name="GoogleClouddomainsRegistrationYearlyPriceOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleclouddomainsregistration"

googleclouddomainsregistration.NewGoogleClouddomainsRegistrationYearlyPriceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleClouddomainsRegistrationYearlyPriceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode">ResetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode"></a>

```go
func ResetCurrencyCode()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetUnits"></a>

```go
func ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput"></a>

```go
func CurrencyCodeInput() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---



