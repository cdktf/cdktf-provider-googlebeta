# `googleOrganizationAccessApprovalSettings` Submodule <a name="`googleOrganizationAccessApprovalSettings` Submodule" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationAccessApprovalSettings <a name="GoogleOrganizationAccessApprovalSettings" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings google_organization_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.NewGoogleOrganizationAccessApprovalSettings(scope Construct, id *string, config GoogleOrganizationAccessApprovalSettingsConfig) GoogleOrganizationAccessApprovalSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig">GoogleOrganizationAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig">GoogleOrganizationAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices">PutEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion">ResetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails">ResetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnrolledServices` <a name="PutEnrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices"></a>

```go
func PutEnrolledServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOrganizationAccessApprovalSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

---

##### `ResetActiveKeyVersion` <a name="ResetActiveKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion"></a>

```go
func ResetActiveKeyVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationEmails` <a name="ResetNotificationEmails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails"></a>

```go
func ResetNotificationEmails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.GoogleOrganizationAccessApprovalSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.GoogleOrganizationAccessApprovalSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.GoogleOrganizationAccessApprovalSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.GoogleOrganizationAccessApprovalSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOrganizationAccessApprovalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOrganizationAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion">AncestorHasActiveKeyVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor">EnrolledAncestor</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices">EnrolledServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion">InvalidKeyVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput">ActiveKeyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput">EnrolledServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput">NotificationEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AncestorHasActiveKeyVersion`<sup>Required</sup> <a name="AncestorHasActiveKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```go
func AncestorHasActiveKeyVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnrolledAncestor`<sup>Required</sup> <a name="EnrolledAncestor" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor"></a>

```go
func EnrolledAncestor() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices"></a>

```go
func EnrolledServices() GoogleOrganizationAccessApprovalSettingsEnrolledServicesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a>

---

##### `InvalidKeyVersion`<sup>Required</sup> <a name="InvalidKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion"></a>

```go
func InvalidKeyVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts"></a>

```go
func Timeouts() GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `ActiveKeyVersionInput`<sup>Optional</sup> <a name="ActiveKeyVersionInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput"></a>

```go
func ActiveKeyVersionInput() *string
```

- *Type:* *string

---

##### `EnrolledServicesInput`<sup>Optional</sup> <a name="EnrolledServicesInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput"></a>

```go
func EnrolledServicesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationEmailsInput`<sup>Optional</sup> <a name="NotificationEmailsInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput"></a>

```go
func NotificationEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion"></a>

```go
func ActiveKeyVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationEmails`<sup>Required</sup> <a name="NotificationEmails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails"></a>

```go
func NotificationEmails() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationAccessApprovalSettingsConfig <a name="GoogleOrganizationAccessApprovalSettingsConfig" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

&googleorganizationaccessapprovalsettings.GoogleOrganizationAccessApprovalSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnrolledServices: interface{},
	OrganizationId: *string,
	ActiveKeyVersion: *string,
	Id: *string,
	NotificationEmails: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices">EnrolledServices</a></code> | <code>interface{}</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices"></a>

```go
EnrolledServices interface{}
```

- *Type:* interface{}

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#enrolled_services GoogleOrganizationAccessApprovalSettings#enrolled_services}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#organization_id GoogleOrganizationAccessApprovalSettings#organization_id}

---

##### `ActiveKeyVersion`<sup>Optional</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```go
ActiveKeyVersion *string
```

- *Type:* *string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#active_key_version GoogleOrganizationAccessApprovalSettings#active_key_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationEmails`<sup>Optional</sup> <a name="NotificationEmails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails"></a>

```go
NotificationEmails *[]*string
```

- *Type:* *[]*string

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#notification_emails GoogleOrganizationAccessApprovalSettings#notification_emails}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts"></a>

```go
Timeouts GoogleOrganizationAccessApprovalSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#timeouts GoogleOrganizationAccessApprovalSettings#timeouts}

---

### GoogleOrganizationAccessApprovalSettingsEnrolledServices <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

&googleorganizationaccessapprovalsettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices {
	CloudProduct: *string,
	EnrollmentLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```go
CloudProduct *string
```

- *Type:* *string

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#cloud_product GoogleOrganizationAccessApprovalSettings#cloud_product}

---

##### `EnrollmentLevel`<sup>Optional</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```go
EnrollmentLevel *string
```

- *Type:* *string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#enrollment_level GoogleOrganizationAccessApprovalSettings#enrollment_level}

---

### GoogleOrganizationAccessApprovalSettingsTimeouts <a name="GoogleOrganizationAccessApprovalSettingsTimeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

&googleorganizationaccessapprovalsettings.GoogleOrganizationAccessApprovalSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationAccessApprovalSettingsEnrolledServicesList <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.NewGoogleOrganizationAccessApprovalSettingsEnrolledServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOrganizationAccessApprovalSettingsEnrolledServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get"></a>

```go
func Get(index *f64) GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.NewGoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">ResetEnrollmentLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnrollmentLevel` <a name="ResetEnrollmentLevel" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```go
func ResetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">CloudProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">EnrollmentLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProductInput`<sup>Optional</sup> <a name="CloudProductInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```go
func CloudProductInput() *string
```

- *Type:* *string

---

##### `EnrollmentLevelInput`<sup>Optional</sup> <a name="EnrollmentLevelInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```go
func EnrollmentLevelInput() *string
```

- *Type:* *string

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```go
func CloudProduct() *string
```

- *Type:* *string

---

##### `EnrollmentLevel`<sup>Required</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```go
func EnrollmentLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference <a name="GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleorganizationaccessapprovalsettings"

googleorganizationaccessapprovalsettings.NewGoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



