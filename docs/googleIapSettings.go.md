# `googleIapSettings` Submodule <a name="`googleIapSettings` Submodule" id="@cdktf/provider-google-beta.googleIapSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapSettings <a name="GoogleIapSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings google_iap_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettings(scope Construct, id *string, config GoogleIapSettingsConfig) GoogleIapSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig">GoogleIapSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig">GoogleIapSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings">PutAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings">PutApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings">ResetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings">ResetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessSettings` <a name="PutAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings"></a>

```go
func PutAccessSettings(value GoogleIapSettingsAccessSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `PutApplicationSettings` <a name="PutApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings"></a>

```go
func PutApplicationSettings(value GoogleIapSettingsApplicationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIapSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---

##### `ResetAccessSettings` <a name="ResetAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings"></a>

```go
func ResetAccessSettings()
```

##### `ResetApplicationSettings` <a name="ResetApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings"></a>

```go
func ResetApplicationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.GoogleIapSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.GoogleIapSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.GoogleIapSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.GoogleIapSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIapSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIapSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput">AccessSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput">ApplicationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessSettings`<sup>Required</sup> <a name="AccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings"></a>

```go
func AccessSettings() GoogleIapSettingsAccessSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a>

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings"></a>

```go
func ApplicationSettings() GoogleIapSettingsApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts"></a>

```go
func Timeouts() GoogleIapSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a>

---

##### `AccessSettingsInput`<sup>Optional</sup> <a name="AccessSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput"></a>

```go
func AccessSettingsInput() GoogleIapSettingsAccessSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `ApplicationSettingsInput`<sup>Optional</sup> <a name="ApplicationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput"></a>

```go
func ApplicationSettingsInput() GoogleIapSettingsApplicationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapSettingsAccessSettings <a name="GoogleIapSettingsAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettings {
	AllowedDomainsSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings,
	CorsSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings,
	GcipSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings,
	IdentitySources: *[]*string,
	OauthSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings,
	ReauthSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings,
	WorkforceIdentitySettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings">AllowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | allowed_domains_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings">CorsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | cors_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings">GcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | gcip_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources">IdentitySources</a></code> | <code>*[]*string</code> | Identity sources that IAP can use to authenticate the end user. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings">OauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | oauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings">ReauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | reauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings">WorkforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | workforce_identity_settings block. |

---

##### `AllowedDomainsSettings`<sup>Optional</sup> <a name="AllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings"></a>

```go
AllowedDomainsSettings GoogleIapSettingsAccessSettingsAllowedDomainsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#allowed_domains_settings GoogleIapSettings#allowed_domains_settings}

---

##### `CorsSettings`<sup>Optional</sup> <a name="CorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings"></a>

```go
CorsSettings GoogleIapSettingsAccessSettingsCorsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#cors_settings GoogleIapSettings#cors_settings}

---

##### `GcipSettings`<sup>Optional</sup> <a name="GcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings"></a>

```go
GcipSettings GoogleIapSettingsAccessSettingsGcipSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#gcip_settings GoogleIapSettings#gcip_settings}

---

##### `IdentitySources`<sup>Optional</sup> <a name="IdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources"></a>

```go
IdentitySources *[]*string
```

- *Type:* *[]*string

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#identity_sources GoogleIapSettings#identity_sources}

---

##### `OauthSettings`<sup>Optional</sup> <a name="OauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings"></a>

```go
OauthSettings GoogleIapSettingsAccessSettingsOauthSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#oauth_settings GoogleIapSettings#oauth_settings}

---

##### `ReauthSettings`<sup>Optional</sup> <a name="ReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings"></a>

```go
ReauthSettings GoogleIapSettingsAccessSettingsReauthSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#reauth_settings GoogleIapSettings#reauth_settings}

---

##### `WorkforceIdentitySettings`<sup>Optional</sup> <a name="WorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings"></a>

```go
WorkforceIdentitySettings GoogleIapSettingsAccessSettingsWorkforceIdentitySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#workforce_identity_settings GoogleIapSettings#workforce_identity_settings}

---

### GoogleIapSettingsAccessSettingsAllowedDomainsSettings <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings {
	Domains: *[]*string,
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains">Domains</a></code> | <code>*[]*string</code> | List of trusted domains. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable">Enable</a></code> | <code>interface{}</code> | Configuration for customers to opt in for the feature. |

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#domains GoogleIapSettings#domains}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

### GoogleIapSettingsAccessSettingsCorsSettings <a name="GoogleIapSettingsAccessSettingsCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettingsCorsSettings {
	AllowHttpOptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions">AllowHttpOptions</a></code> | <code>interface{}</code> | Configuration to allow HTTP OPTIONS calls to skip authorization. |

---

##### `AllowHttpOptions`<sup>Optional</sup> <a name="AllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions"></a>

```go
AllowHttpOptions interface{}
```

- *Type:* interface{}

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#allow_http_options GoogleIapSettings#allow_http_options}

---

### GoogleIapSettingsAccessSettingsGcipSettings <a name="GoogleIapSettingsAccessSettingsGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettingsGcipSettings {
	LoginPageUri: *string,
	TenantIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri">LoginPageUri</a></code> | <code>*string</code> | Login page URI associated with the GCIP tenants. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds">TenantIds</a></code> | <code>*[]*string</code> | GCIP tenant ids that are linked to the IAP resource. |

---

##### `LoginPageUri`<sup>Optional</sup> <a name="LoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri"></a>

```go
LoginPageUri *string
```

- *Type:* *string

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#login_page_uri GoogleIapSettings#login_page_uri}

---

##### `TenantIds`<sup>Optional</sup> <a name="TenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds"></a>

```go
TenantIds *[]*string
```

- *Type:* *[]*string

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#tenant_ids GoogleIapSettings#tenant_ids}

---

### GoogleIapSettingsAccessSettingsOauthSettings <a name="GoogleIapSettingsAccessSettingsOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettingsOauthSettings {
	LoginHint: *string,
	ProgrammaticClients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint">LoginHint</a></code> | <code>*string</code> | Domain hint to send as hd=? |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients">ProgrammaticClients</a></code> | <code>*[]*string</code> | List of client ids allowed to use IAP programmatically. |

---

##### `LoginHint`<sup>Optional</sup> <a name="LoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint"></a>

```go
LoginHint *string
```

- *Type:* *string

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

* loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#login_hint GoogleIapSettings#login_hint}

---

##### `ProgrammaticClients`<sup>Optional</sup> <a name="ProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients"></a>

```go
ProgrammaticClients *[]*string
```

- *Type:* *[]*string

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#programmatic_clients GoogleIapSettings#programmatic_clients}

---

### GoogleIapSettingsAccessSettingsReauthSettings <a name="GoogleIapSettingsAccessSettingsReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettingsReauthSettings {
	MaxAge: *string,
	Method: *string,
	PolicyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge">MaxAge</a></code> | <code>*string</code> | Reauth session lifetime, how long before a user has to reauthenticate again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method">Method</a></code> | <code>*string</code> | Reauth method requested. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType">PolicyType</a></code> | <code>*string</code> | How IAP determines the effective policy in cases of hierarchical policies. |

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge"></a>

```go
MaxAge *string
```

- *Type:* *string

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#max_age GoogleIapSettings#max_age}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method"></a>

```go
Method *string
```

- *Type:* *string

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#method GoogleIapSettings#method}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#policy_type GoogleIapSettings#policy_type}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettings <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings {
	Oauth2: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2,
	WorkforcePools: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2">Oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | oauth2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools">WorkforcePools</a></code> | <code>*[]*string</code> | The workforce pool resources. Only one workforce pool is accepted. |

---

##### `Oauth2`<sup>Optional</sup> <a name="Oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2"></a>

```go
Oauth2 GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#oauth2 GoogleIapSettings#oauth2}

---

##### `WorkforcePools`<sup>Optional</sup> <a name="WorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools"></a>

```go
WorkforcePools *[]*string
```

- *Type:* *[]*string

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#workforce_pools GoogleIapSettings#workforce_pools}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId">ClientId</a></code> | <code>*string</code> | The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Input only. The OAuth 2.0 client secret created while registering the client ID. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#client_id GoogleIapSettings#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#client_secret GoogleIapSettings#client_secret}

---

### GoogleIapSettingsApplicationSettings <a name="GoogleIapSettingsApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsApplicationSettings {
	AccessDeniedPageSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings,
	AttributePropagationSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings,
	CookieDomain: *string,
	CsmSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings">AccessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | access_denied_page_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings">AttributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | attribute_propagation_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain">CookieDomain</a></code> | <code>*string</code> | The Domain value to set for cookies generated by IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings">CsmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | csm_settings block. |

---

##### `AccessDeniedPageSettings`<sup>Optional</sup> <a name="AccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings"></a>

```go
AccessDeniedPageSettings GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#access_denied_page_settings GoogleIapSettings#access_denied_page_settings}

---

##### `AttributePropagationSettings`<sup>Optional</sup> <a name="AttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings"></a>

```go
AttributePropagationSettings GoogleIapSettingsApplicationSettingsAttributePropagationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#attribute_propagation_settings GoogleIapSettings#attribute_propagation_settings}

---

##### `CookieDomain`<sup>Optional</sup> <a name="CookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain"></a>

```go
CookieDomain *string
```

- *Type:* *string

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#cookie_domain GoogleIapSettings#cookie_domain}

---

##### `CsmSettings`<sup>Optional</sup> <a name="CsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings"></a>

```go
CsmSettings GoogleIapSettingsApplicationSettingsCsmSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#csm_settings GoogleIapSettings#csm_settings}

---

### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings {
	AccessDeniedPageUri: *string,
	GenerateTroubleshootingUri: interface{},
	RemediationTokenGenerationEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri">AccessDeniedPageUri</a></code> | <code>*string</code> | The URI to be redirected to when access is denied. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri">GenerateTroubleshootingUri</a></code> | <code>interface{}</code> | Whether to generate a troubleshooting URL on access denied events to this application. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled">RemediationTokenGenerationEnabled</a></code> | <code>interface{}</code> | Whether to generate remediation token on access denied events to this application. |

---

##### `AccessDeniedPageUri`<sup>Optional</sup> <a name="AccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri"></a>

```go
AccessDeniedPageUri *string
```

- *Type:* *string

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#access_denied_page_uri GoogleIapSettings#access_denied_page_uri}

---

##### `GenerateTroubleshootingUri`<sup>Optional</sup> <a name="GenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri"></a>

```go
GenerateTroubleshootingUri interface{}
```

- *Type:* interface{}

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#generate_troubleshooting_uri GoogleIapSettings#generate_troubleshooting_uri}

---

##### `RemediationTokenGenerationEnabled`<sup>Optional</sup> <a name="RemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled"></a>

```go
RemediationTokenGenerationEnabled interface{}
```

- *Type:* interface{}

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#remediation_token_generation_enabled GoogleIapSettings#remediation_token_generation_enabled}

---

### GoogleIapSettingsApplicationSettingsAttributePropagationSettings <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings {
	Enable: interface{},
	Expression: *string,
	OutputCredentials: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable">Enable</a></code> | <code>interface{}</code> | Whether the provided attribute propagation settings should be evaluated on user requests. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression">Expression</a></code> | <code>*string</code> | Raw string CEL expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials">OutputCredentials</a></code> | <code>*[]*string</code> | Which output credentials attributes selected by the CEL expression should be propagated in. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#expression GoogleIapSettings#expression}

---

##### `OutputCredentials`<sup>Optional</sup> <a name="OutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials"></a>

```go
OutputCredentials *[]*string
```

- *Type:* *[]*string

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
  "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#output_credentials GoogleIapSettings#output_credentials}

---

### GoogleIapSettingsApplicationSettingsCsmSettings <a name="GoogleIapSettingsApplicationSettingsCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsApplicationSettingsCsmSettings {
	RctokenAud: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud">RctokenAud</a></code> | <code>*string</code> | Audience claim set in the generated RCToken. This value is not validated by IAP. |

---

##### `RctokenAud`<sup>Optional</sup> <a name="RctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud"></a>

```go
RctokenAud *string
```

- *Type:* *string

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#rctoken_aud GoogleIapSettings#rctoken_aud}

---

### GoogleIapSettingsConfig <a name="GoogleIapSettingsConfig" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsAccessSettings,
	ApplicationSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsApplicationSettings,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIapSettings.GoogleIapSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#id GoogleIapSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#name GoogleIapSettings#name}

---

##### `AccessSettings`<sup>Optional</sup> <a name="AccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings"></a>

```go
AccessSettings GoogleIapSettingsAccessSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#access_settings GoogleIapSettings#access_settings}

---

##### `ApplicationSettings`<sup>Optional</sup> <a name="ApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings"></a>

```go
ApplicationSettings GoogleIapSettingsApplicationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#application_settings GoogleIapSettings#application_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#id GoogleIapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts"></a>

```go
Timeouts GoogleIapSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#timeouts GoogleIapSettings#timeouts}

---

### GoogleIapSettingsTimeouts <a name="GoogleIapSettingsTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

&googleiapsettings.GoogleIapSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#create GoogleIapSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#update GoogleIapSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#create GoogleIapSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_iap_settings#update GoogleIapSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains"></a>

```go
func ResetDomains()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable"></a>

```go
func ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettingsAllowedDomainsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---


### GoogleIapSettingsAccessSettingsCorsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsCorsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsCorsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsCorsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions">ResetAllowHttpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowHttpOptions` <a name="ResetAllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions"></a>

```go
func ResetAllowHttpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput">AllowHttpOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions">AllowHttpOptions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowHttpOptionsInput`<sup>Optional</sup> <a name="AllowHttpOptionsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput"></a>

```go
func AllowHttpOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowHttpOptions`<sup>Required</sup> <a name="AllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions"></a>

```go
func AllowHttpOptions() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettingsCorsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---


### GoogleIapSettingsAccessSettingsGcipSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsGcipSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsGcipSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsGcipSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri">ResetLoginPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds">ResetTenantIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoginPageUri` <a name="ResetLoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri"></a>

```go
func ResetLoginPageUri()
```

##### `ResetTenantIds` <a name="ResetTenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds"></a>

```go
func ResetTenantIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput">LoginPageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput">TenantIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri">LoginPageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds">TenantIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoginPageUriInput`<sup>Optional</sup> <a name="LoginPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput"></a>

```go
func LoginPageUriInput() *string
```

- *Type:* *string

---

##### `TenantIdsInput`<sup>Optional</sup> <a name="TenantIdsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput"></a>

```go
func TenantIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginPageUri`<sup>Required</sup> <a name="LoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri"></a>

```go
func LoginPageUri() *string
```

- *Type:* *string

---

##### `TenantIds`<sup>Required</sup> <a name="TenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds"></a>

```go
func TenantIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettingsGcipSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---


### GoogleIapSettingsAccessSettingsOauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsOauthSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsOauthSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint">ResetLoginHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients">ResetProgrammaticClients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoginHint` <a name="ResetLoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint"></a>

```go
func ResetLoginHint()
```

##### `ResetProgrammaticClients` <a name="ResetProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients"></a>

```go
func ResetProgrammaticClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput">LoginHintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput">ProgrammaticClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint">LoginHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients">ProgrammaticClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoginHintInput`<sup>Optional</sup> <a name="LoginHintInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput"></a>

```go
func LoginHintInput() *string
```

- *Type:* *string

---

##### `ProgrammaticClientsInput`<sup>Optional</sup> <a name="ProgrammaticClientsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput"></a>

```go
func ProgrammaticClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginHint`<sup>Required</sup> <a name="LoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint"></a>

```go
func LoginHint() *string
```

- *Type:* *string

---

##### `ProgrammaticClients`<sup>Required</sup> <a name="ProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients"></a>

```go
func ProgrammaticClients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettingsOauthSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---


### GoogleIapSettingsAccessSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings">PutAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings">PutCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings">PutGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings">PutOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings">PutReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings">PutWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings">ResetAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings">ResetCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings">ResetGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources">ResetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings">ResetOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings">ResetReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings">ResetWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedDomainsSettings` <a name="PutAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings"></a>

```go
func PutAllowedDomainsSettings(value GoogleIapSettingsAccessSettingsAllowedDomainsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `PutCorsSettings` <a name="PutCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings"></a>

```go
func PutCorsSettings(value GoogleIapSettingsAccessSettingsCorsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `PutGcipSettings` <a name="PutGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings"></a>

```go
func PutGcipSettings(value GoogleIapSettingsAccessSettingsGcipSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `PutOauthSettings` <a name="PutOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings"></a>

```go
func PutOauthSettings(value GoogleIapSettingsAccessSettingsOauthSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `PutReauthSettings` <a name="PutReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings"></a>

```go
func PutReauthSettings(value GoogleIapSettingsAccessSettingsReauthSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `PutWorkforceIdentitySettings` <a name="PutWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings"></a>

```go
func PutWorkforceIdentitySettings(value GoogleIapSettingsAccessSettingsWorkforceIdentitySettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `ResetAllowedDomainsSettings` <a name="ResetAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings"></a>

```go
func ResetAllowedDomainsSettings()
```

##### `ResetCorsSettings` <a name="ResetCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings"></a>

```go
func ResetCorsSettings()
```

##### `ResetGcipSettings` <a name="ResetGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings"></a>

```go
func ResetGcipSettings()
```

##### `ResetIdentitySources` <a name="ResetIdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources"></a>

```go
func ResetIdentitySources()
```

##### `ResetOauthSettings` <a name="ResetOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings"></a>

```go
func ResetOauthSettings()
```

##### `ResetReauthSettings` <a name="ResetReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings"></a>

```go
func ResetReauthSettings()
```

##### `ResetWorkforceIdentitySettings` <a name="ResetWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings"></a>

```go
func ResetWorkforceIdentitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings">AllowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings">CorsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings">GcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings">OauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings">ReauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings">WorkforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput">AllowedDomainsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput">CorsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput">GcipSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput">IdentitySourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput">OauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput">ReauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput">WorkforceIdentitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources">IdentitySources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedDomainsSettings`<sup>Required</sup> <a name="AllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings"></a>

```go
func AllowedDomainsSettings() GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a>

---

##### `CorsSettings`<sup>Required</sup> <a name="CorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings"></a>

```go
func CorsSettings() GoogleIapSettingsAccessSettingsCorsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a>

---

##### `GcipSettings`<sup>Required</sup> <a name="GcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings"></a>

```go
func GcipSettings() GoogleIapSettingsAccessSettingsGcipSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a>

---

##### `OauthSettings`<sup>Required</sup> <a name="OauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings"></a>

```go
func OauthSettings() GoogleIapSettingsAccessSettingsOauthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a>

---

##### `ReauthSettings`<sup>Required</sup> <a name="ReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings"></a>

```go
func ReauthSettings() GoogleIapSettingsAccessSettingsReauthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a>

---

##### `WorkforceIdentitySettings`<sup>Required</sup> <a name="WorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings"></a>

```go
func WorkforceIdentitySettings() GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a>

---

##### `AllowedDomainsSettingsInput`<sup>Optional</sup> <a name="AllowedDomainsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput"></a>

```go
func AllowedDomainsSettingsInput() GoogleIapSettingsAccessSettingsAllowedDomainsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `CorsSettingsInput`<sup>Optional</sup> <a name="CorsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput"></a>

```go
func CorsSettingsInput() GoogleIapSettingsAccessSettingsCorsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `GcipSettingsInput`<sup>Optional</sup> <a name="GcipSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput"></a>

```go
func GcipSettingsInput() GoogleIapSettingsAccessSettingsGcipSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `IdentitySourcesInput`<sup>Optional</sup> <a name="IdentitySourcesInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput"></a>

```go
func IdentitySourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OauthSettingsInput`<sup>Optional</sup> <a name="OauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput"></a>

```go
func OauthSettingsInput() GoogleIapSettingsAccessSettingsOauthSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `ReauthSettingsInput`<sup>Optional</sup> <a name="ReauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput"></a>

```go
func ReauthSettingsInput() GoogleIapSettingsAccessSettingsReauthSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `WorkforceIdentitySettingsInput`<sup>Optional</sup> <a name="WorkforceIdentitySettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput"></a>

```go
func WorkforceIdentitySettingsInput() GoogleIapSettingsAccessSettingsWorkforceIdentitySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `IdentitySources`<sup>Required</sup> <a name="IdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources"></a>

```go
func IdentitySources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---


### GoogleIapSettingsAccessSettingsReauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsReauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsReauthSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsReauthSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge">MaxAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge"></a>

```go
func MaxAge() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettingsReauthSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256">ClientSecretSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientSecretSha256`<sup>Required</sup> <a name="ClientSecretSha256" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256"></a>

```go
func ClientSecretSha256() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2">PutOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2">ResetOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools">ResetWorkforcePools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth2` <a name="PutOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2"></a>

```go
func PutOauth2(value GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `ResetOauth2` <a name="ResetOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2"></a>

```go
func ResetOauth2()
```

##### `ResetWorkforcePools` <a name="ResetWorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools"></a>

```go
func ResetWorkforcePools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2">Oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input">Oauth2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput">WorkforcePoolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools">WorkforcePools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth2`<sup>Required</sup> <a name="Oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2"></a>

```go
func Oauth2() GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a>

---

##### `Oauth2Input`<sup>Optional</sup> <a name="Oauth2Input" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input"></a>

```go
func Oauth2Input() GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `WorkforcePoolsInput`<sup>Optional</sup> <a name="WorkforcePoolsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput"></a>

```go
func WorkforcePoolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkforcePools`<sup>Required</sup> <a name="WorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools"></a>

```go
func WorkforcePools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsAccessSettingsWorkforceIdentitySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---


### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri">ResetAccessDeniedPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri">ResetGenerateTroubleshootingUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled">ResetRemediationTokenGenerationEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessDeniedPageUri` <a name="ResetAccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri"></a>

```go
func ResetAccessDeniedPageUri()
```

##### `ResetGenerateTroubleshootingUri` <a name="ResetGenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri"></a>

```go
func ResetGenerateTroubleshootingUri()
```

##### `ResetRemediationTokenGenerationEnabled` <a name="ResetRemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled"></a>

```go
func ResetRemediationTokenGenerationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput">AccessDeniedPageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput">GenerateTroubleshootingUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput">RemediationTokenGenerationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri">AccessDeniedPageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri">GenerateTroubleshootingUri</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled">RemediationTokenGenerationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDeniedPageUriInput`<sup>Optional</sup> <a name="AccessDeniedPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput"></a>

```go
func AccessDeniedPageUriInput() *string
```

- *Type:* *string

---

##### `GenerateTroubleshootingUriInput`<sup>Optional</sup> <a name="GenerateTroubleshootingUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput"></a>

```go
func GenerateTroubleshootingUriInput() interface{}
```

- *Type:* interface{}

---

##### `RemediationTokenGenerationEnabledInput`<sup>Optional</sup> <a name="RemediationTokenGenerationEnabledInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput"></a>

```go
func RemediationTokenGenerationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AccessDeniedPageUri`<sup>Required</sup> <a name="AccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri"></a>

```go
func AccessDeniedPageUri() *string
```

- *Type:* *string

---

##### `GenerateTroubleshootingUri`<sup>Required</sup> <a name="GenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri"></a>

```go
func GenerateTroubleshootingUri() interface{}
```

- *Type:* interface{}

---

##### `RemediationTokenGenerationEnabled`<sup>Required</sup> <a name="RemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled"></a>

```go
func RemediationTokenGenerationEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---


### GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials">ResetOutputCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetOutputCredentials` <a name="ResetOutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials"></a>

```go
func ResetOutputCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput">OutputCredentialsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials">OutputCredentials</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `OutputCredentialsInput`<sup>Optional</sup> <a name="OutputCredentialsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput"></a>

```go
func OutputCredentialsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `OutputCredentials`<sup>Required</sup> <a name="OutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials"></a>

```go
func OutputCredentials() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsApplicationSettingsAttributePropagationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---


### GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsApplicationSettingsCsmSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud">ResetRctokenAud</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRctokenAud` <a name="ResetRctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud"></a>

```go
func ResetRctokenAud()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput">RctokenAudInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud">RctokenAud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RctokenAudInput`<sup>Optional</sup> <a name="RctokenAudInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput"></a>

```go
func RctokenAudInput() *string
```

- *Type:* *string

---

##### `RctokenAud`<sup>Required</sup> <a name="RctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud"></a>

```go
func RctokenAud() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsApplicationSettingsCsmSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---


### GoogleIapSettingsApplicationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsApplicationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsApplicationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings">PutAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings">PutAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings">PutCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings">ResetAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings">ResetAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain">ResetCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings">ResetCsmSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessDeniedPageSettings` <a name="PutAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings"></a>

```go
func PutAccessDeniedPageSettings(value GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `PutAttributePropagationSettings` <a name="PutAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings"></a>

```go
func PutAttributePropagationSettings(value GoogleIapSettingsApplicationSettingsAttributePropagationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `PutCsmSettings` <a name="PutCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings"></a>

```go
func PutCsmSettings(value GoogleIapSettingsApplicationSettingsCsmSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `ResetAccessDeniedPageSettings` <a name="ResetAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings"></a>

```go
func ResetAccessDeniedPageSettings()
```

##### `ResetAttributePropagationSettings` <a name="ResetAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings"></a>

```go
func ResetAttributePropagationSettings()
```

##### `ResetCookieDomain` <a name="ResetCookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain"></a>

```go
func ResetCookieDomain()
```

##### `ResetCsmSettings` <a name="ResetCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings"></a>

```go
func ResetCsmSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings">AccessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings">AttributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings">CsmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput">AccessDeniedPageSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput">AttributePropagationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput">CookieDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput">CsmSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain">CookieDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDeniedPageSettings`<sup>Required</sup> <a name="AccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings"></a>

```go
func AccessDeniedPageSettings() GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a>

---

##### `AttributePropagationSettings`<sup>Required</sup> <a name="AttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings"></a>

```go
func AttributePropagationSettings() GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a>

---

##### `CsmSettings`<sup>Required</sup> <a name="CsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings"></a>

```go
func CsmSettings() GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a>

---

##### `AccessDeniedPageSettingsInput`<sup>Optional</sup> <a name="AccessDeniedPageSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput"></a>

```go
func AccessDeniedPageSettingsInput() GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `AttributePropagationSettingsInput`<sup>Optional</sup> <a name="AttributePropagationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput"></a>

```go
func AttributePropagationSettingsInput() GoogleIapSettingsApplicationSettingsAttributePropagationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `CookieDomainInput`<sup>Optional</sup> <a name="CookieDomainInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput"></a>

```go
func CookieDomainInput() *string
```

- *Type:* *string

---

##### `CsmSettingsInput`<sup>Optional</sup> <a name="CsmSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput"></a>

```go
func CsmSettingsInput() GoogleIapSettingsApplicationSettingsCsmSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `CookieDomain`<sup>Required</sup> <a name="CookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain"></a>

```go
func CookieDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapSettingsApplicationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---


### GoogleIapSettingsTimeoutsOutputReference <a name="GoogleIapSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiapsettings"

googleiapsettings.NewGoogleIapSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



