# `googleAppEngineServiceNetworkSettings` Submodule <a name="`googleAppEngineServiceNetworkSettings` Submodule" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineServiceNetworkSettings <a name="GoogleAppEngineServiceNetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings google_app_engine_service_network_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

googleappengineservicenetworksettings.NewGoogleAppEngineServiceNetworkSettings(scope Construct, id *string, config GoogleAppEngineServiceNetworkSettingsConfig) GoogleAppEngineServiceNetworkSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig">GoogleAppEngineServiceNetworkSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig">GoogleAppEngineServiceNetworkSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings">PutNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkSettings` <a name="PutNetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings"></a>

```go
func PutNetworkSettings(value GoogleAppEngineServiceNetworkSettingsNetworkSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAppEngineServiceNetworkSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineServiceNetworkSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

googleappengineservicenetworksettings.GoogleAppEngineServiceNetworkSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

googleappengineservicenetworksettings.GoogleAppEngineServiceNetworkSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

googleappengineservicenetworksettings.GoogleAppEngineServiceNetworkSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

googleappengineservicenetworksettings.GoogleAppEngineServiceNetworkSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAppEngineServiceNetworkSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAppEngineServiceNetworkSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAppEngineServiceNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineServiceNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettings">NetworkSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference">GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference">GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettingsInput">NetworkSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkSettings`<sup>Required</sup> <a name="NetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettings"></a>

```go
func NetworkSettings() GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference">GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeouts"></a>

```go
func Timeouts() GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference">GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkSettingsInput`<sup>Optional</sup> <a name="NetworkSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettingsInput"></a>

```go
func NetworkSettingsInput() GoogleAppEngineServiceNetworkSettingsNetworkSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineServiceNetworkSettingsConfig <a name="GoogleAppEngineServiceNetworkSettingsConfig" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

&googleappengineservicenetworksettings.GoogleAppEngineServiceNetworkSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings,
	Service: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.networkSettings">NetworkSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | network_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.service">Service</a></code> | <code>*string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#id GoogleAppEngineServiceNetworkSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#project GoogleAppEngineServiceNetworkSettings#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkSettings`<sup>Required</sup> <a name="NetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.networkSettings"></a>

```go
NetworkSettings GoogleAppEngineServiceNetworkSettingsNetworkSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

network_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#network_settings GoogleAppEngineServiceNetworkSettings#network_settings}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#service GoogleAppEngineServiceNetworkSettings#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#id GoogleAppEngineServiceNetworkSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#project GoogleAppEngineServiceNetworkSettings#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.timeouts"></a>

```go
Timeouts GoogleAppEngineServiceNetworkSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#timeouts GoogleAppEngineServiceNetworkSettings#timeouts}

---

### GoogleAppEngineServiceNetworkSettingsNetworkSettings <a name="GoogleAppEngineServiceNetworkSettingsNetworkSettings" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

&googleappengineservicenetworksettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings {
	IngressTrafficAllowed: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed">IngressTrafficAllowed</a></code> | <code>*string</code> | The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"]. |

---

##### `IngressTrafficAllowed`<sup>Optional</sup> <a name="IngressTrafficAllowed" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed"></a>

```go
IngressTrafficAllowed *string
```

- *Type:* *string

The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#ingress_traffic_allowed GoogleAppEngineServiceNetworkSettings#ingress_traffic_allowed}

---

### GoogleAppEngineServiceNetworkSettingsTimeouts <a name="GoogleAppEngineServiceNetworkSettingsTimeouts" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

&googleappengineservicenetworksettings.GoogleAppEngineServiceNetworkSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#create GoogleAppEngineServiceNetworkSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#delete GoogleAppEngineServiceNetworkSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#update GoogleAppEngineServiceNetworkSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#create GoogleAppEngineServiceNetworkSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#delete GoogleAppEngineServiceNetworkSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_service_network_settings#update GoogleAppEngineServiceNetworkSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference <a name="GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

googleappengineservicenetworksettings.NewGoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed">ResetIngressTrafficAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngressTrafficAllowed` <a name="ResetIngressTrafficAllowed" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed"></a>

```go
func ResetIngressTrafficAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput">IngressTrafficAllowedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed">IngressTrafficAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressTrafficAllowedInput`<sup>Optional</sup> <a name="IngressTrafficAllowedInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput"></a>

```go
func IngressTrafficAllowedInput() *string
```

- *Type:* *string

---

##### `IngressTrafficAllowed`<sup>Required</sup> <a name="IngressTrafficAllowed" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed"></a>

```go
func IngressTrafficAllowed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineServiceNetworkSettingsNetworkSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---


### GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference <a name="GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineservicenetworksettings"

googleappengineservicenetworksettings.NewGoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



