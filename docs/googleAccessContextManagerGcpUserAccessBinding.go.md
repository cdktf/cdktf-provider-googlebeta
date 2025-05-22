# `googleAccessContextManagerGcpUserAccessBinding` Submodule <a name="`googleAccessContextManagerGcpUserAccessBinding` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerGcpUserAccessBinding <a name="GoogleAccessContextManagerGcpUserAccessBinding" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBinding(scope Construct, id *string, config GoogleAccessContextManagerGcpUserAccessBindingConfig) GoogleAccessContextManagerGcpUserAccessBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig">GoogleAccessContextManagerGcpUserAccessBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig">GoogleAccessContextManagerGcpUserAccessBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putScopedAccessSettings">PutScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings">ResetScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScopedAccessSettings` <a name="PutScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putScopedAccessSettings"></a>

```go
func PutScopedAccessSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putScopedAccessSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putSessionSettings"></a>

```go
func PutSessionSettings(value GoogleAccessContextManagerGcpUserAccessBindingSessionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAccessContextManagerGcpUserAccessBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts">GoogleAccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetScopedAccessSettings` <a name="ResetScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings"></a>

```go
func ResetScopedAccessSettings()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetSessionSettings"></a>

```go
func ResetSessionSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAccessContextManagerGcpUserAccessBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAccessContextManagerGcpUserAccessBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerGcpUserAccessBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKeyInput">GroupKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput">ScopedAccessSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKey">GroupKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopedAccessSettings`<sup>Required</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings"></a>

```go
func ScopedAccessSettings() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a>

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettings"></a>

```go
func SessionSettings() GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeouts"></a>

```go
func Timeouts() GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupKeyInput`<sup>Optional</sup> <a name="GroupKeyInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKeyInput"></a>

```go
func GroupKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `ScopedAccessSettingsInput`<sup>Optional</sup> <a name="ScopedAccessSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput"></a>

```go
func ScopedAccessSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput"></a>

```go
func SessionSettingsInput() GoogleAccessContextManagerGcpUserAccessBindingSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.groupKey"></a>

```go
func GroupKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerGcpUserAccessBindingConfig <a name="GoogleAccessContextManagerGcpUserAccessBindingConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupKey: *string,
	OrganizationId: *string,
	AccessLevels: *[]*string,
	Id: *string,
	ScopedAccessSettings: interface{},
	SessionSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.groupKey">GroupKey</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | Required. ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#id GoogleAccessContextManagerGcpUserAccessBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code>interface{}</code> | scoped_access_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | session_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts">GoogleAccessContextManagerGcpUserAccessBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.groupKey"></a>

```go
GroupKey *string
```

- *Type:* *string

Required.

Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#group_key GoogleAccessContextManagerGcpUserAccessBinding#group_key}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

Required. ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#organization_id GoogleAccessContextManagerGcpUserAccessBinding#organization_id}

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#access_levels GoogleAccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#id GoogleAccessContextManagerGcpUserAccessBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScopedAccessSettings`<sup>Optional</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings"></a>

```go
ScopedAccessSettings interface{}
```

- *Type:* interface{}

scoped_access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#scoped_access_settings GoogleAccessContextManagerGcpUserAccessBinding#scoped_access_settings}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings"></a>

```go
SessionSettings GoogleAccessContextManagerGcpUserAccessBindingSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_settings GoogleAccessContextManagerGcpUserAccessBinding#session_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleAccessContextManagerGcpUserAccessBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts">GoogleAccessContextManagerGcpUserAccessBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#timeouts GoogleAccessContextManagerGcpUserAccessBinding#timeouts}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings {
	ActiveSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings,
	DryRunSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings,
	Scope: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | active_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | dry_run_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | scope block. |

---

##### `ActiveSettings`<sup>Optional</sup> <a name="ActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings"></a>

```go
ActiveSettings GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

active_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#active_settings GoogleAccessContextManagerGcpUserAccessBinding#active_settings}

---

##### `DryRunSettings`<sup>Optional</sup> <a name="DryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings"></a>

```go
DryRunSettings GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

dry_run_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#dry_run_settings GoogleAccessContextManagerGcpUserAccessBinding#dry_run_settings}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope"></a>

```go
Scope GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#scope GoogleAccessContextManagerGcpUserAccessBinding#scope}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings {
	AccessLevels: *[]*string,
	SessionSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | session_settings block. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#access_levels GoogleAccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings"></a>

```go
SessionSettings GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_settings GoogleAccessContextManagerGcpUserAccessBinding#session_settings}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings {
	MaxInactivity: *string,
	SessionLength: *string,
	SessionLengthEnabled: interface{},
	SessionReauthMethod: *string,
	UseOidcMaxAge: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength">SessionLength</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity"></a>

```go
MaxInactivity *string
```

- *Type:* *string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#max_inactivity GoogleAccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength"></a>

```go
SessionLength *string
```

- *Type:* *string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length GoogleAccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled"></a>

```go
SessionLengthEnabled interface{}
```

- *Type:* interface{}

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length_enabled GoogleAccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod"></a>

```go
SessionReauthMethod *string
```

- *Type:* *string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_reauth_method GoogleAccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge"></a>

```go
UseOidcMaxAge interface{}
```

- *Type:* interface{}

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#use_oidc_max_age GoogleAccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings {
	AccessLevels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | Optional. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#access_levels GoogleAccessContextManagerGcpUserAccessBinding#access_levels}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope {
	ClientScope: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | client_scope block. |

---

##### `ClientScope`<sup>Optional</sup> <a name="ClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope"></a>

```go
ClientScope GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

client_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#client_scope GoogleAccessContextManagerGcpUserAccessBinding#client_scope}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope {
	RestrictedClientApplication: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | restricted_client_application block. |

---

##### `RestrictedClientApplication`<sup>Optional</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication"></a>

```go
RestrictedClientApplication GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

restricted_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#restricted_client_application GoogleAccessContextManagerGcpUserAccessBinding#restricted_client_application}

---

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication {
	ClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId">ClientId</a></code> | <code>*string</code> | The OAuth client ID of the application. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The OAuth client ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#client_id GoogleAccessContextManagerGcpUserAccessBinding#client_id}

---

### GoogleAccessContextManagerGcpUserAccessBindingSessionSettings <a name="GoogleAccessContextManagerGcpUserAccessBindingSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings {
	MaxInactivity: *string,
	SessionLength: *string,
	SessionLengthEnabled: interface{},
	SessionReauthMethod: *string,
	UseOidcMaxAge: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength">SessionLength</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity"></a>

```go
MaxInactivity *string
```

- *Type:* *string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#max_inactivity GoogleAccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength"></a>

```go
SessionLength *string
```

- *Type:* *string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length GoogleAccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled"></a>

```go
SessionLengthEnabled interface{}
```

- *Type:* interface{}

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_length_enabled GoogleAccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod"></a>

```go
SessionReauthMethod *string
```

- *Type:* *string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#session_reauth_method GoogleAccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge"></a>

```go
UseOidcMaxAge interface{}
```

- *Type:* interface{}

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#use_oidc_max_age GoogleAccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### GoogleAccessContextManagerGcpUserAccessBindingTimeouts <a name="GoogleAccessContextManagerGcpUserAccessBindingTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

&googleaccesscontextmanagergcpuseraccessbinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#create GoogleAccessContextManagerGcpUserAccessBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#delete GoogleAccessContextManagerGcpUserAccessBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#update GoogleAccessContextManagerGcpUserAccessBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#create GoogleAccessContextManagerGcpUserAccessBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#delete GoogleAccessContextManagerGcpUserAccessBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_access_context_manager_gcp_user_access_binding#update GoogleAccessContextManagerGcpUserAccessBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings"></a>

```go
func PutSessionSettings(value GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings"></a>

```go
func ResetSessionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings"></a>

```go
func SessionSettings() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput"></a>

```go
func SessionSettingsInput() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity"></a>

```go
func ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength"></a>

```go
func ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```go
func ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```go
func ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```go
func ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput"></a>

```go
func MaxInactivityInput() *string
```

- *Type:* *string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```go
func SessionLengthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput"></a>

```go
func SessionLengthInput() *string
```

- *Type:* *string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```go
func SessionReauthMethodInput() *string
```

- *Type:* *string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```go
func UseOidcMaxAgeInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity"></a>

```go
func MaxInactivity() *string
```

- *Type:* *string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength"></a>

```go
func SessionLength() *string
```

- *Type:* *string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```go
func SessionLengthEnabled() interface{}
```

- *Type:* interface{}

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```go
func SessionReauthMethod() *string
```

- *Type:* *string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```go
func UseOidcMaxAge() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings">PutActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings">PutDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings">ResetActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings">ResetDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveSettings` <a name="PutActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings"></a>

```go
func PutActiveSettings(value GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `PutDryRunSettings` <a name="PutDryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings"></a>

```go
func PutDryRunSettings(value GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope"></a>

```go
func PutScope(value GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `ResetActiveSettings` <a name="ResetActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings"></a>

```go
func ResetActiveSettings()
```

##### `ResetDryRunSettings` <a name="ResetDryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings"></a>

```go
func ResetDryRunSettings()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput">ActiveSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput">DryRunSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveSettings`<sup>Required</sup> <a name="ActiveSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings"></a>

```go
func ActiveSettings() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a>

---

##### `DryRunSettings`<sup>Required</sup> <a name="DryRunSettings" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings"></a>

```go
func DryRunSettings() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope"></a>

```go
func Scope() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a>

---

##### `ActiveSettingsInput`<sup>Optional</sup> <a name="ActiveSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput"></a>

```go
func ActiveSettingsInput() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `DryRunSettingsInput`<sup>Optional</sup> <a name="DryRunSettingsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput"></a>

```go
func DryRunSettingsInput() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput"></a>

```go
func ScopeInput() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication">PutRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication">ResetRestrictedClientApplication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictedClientApplication` <a name="PutRestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication"></a>

```go
func PutRestrictedClientApplication(value GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `ResetRestrictedClientApplication` <a name="ResetRestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication"></a>

```go
func ResetRestrictedClientApplication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput">RestrictedClientApplicationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestrictedClientApplication`<sup>Required</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication"></a>

```go
func RestrictedClientApplication() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a>

---

##### `RestrictedClientApplicationInput`<sup>Optional</sup> <a name="RestrictedClientApplicationInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput"></a>

```go
func RestrictedClientApplicationInput() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId"></a>

```go
func ResetClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope">PutClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope">ResetClientScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientScope` <a name="PutClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope"></a>

```go
func PutClientScope(value GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `ResetClientScope` <a name="ResetClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope"></a>

```go
func ResetClientScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput">ClientScopeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientScope`<sup>Required</sup> <a name="ClientScope" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope"></a>

```go
func ClientScope() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a>

---

##### `ClientScopeInput`<sup>Optional</sup> <a name="ClientScopeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput"></a>

```go
func ClientScopeInput() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">GoogleAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity"></a>

```go
func ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength"></a>

```go
func ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```go
func ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```go
func ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```go
func ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput"></a>

```go
func MaxInactivityInput() *string
```

- *Type:* *string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```go
func SessionLengthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput"></a>

```go
func SessionLengthInput() *string
```

- *Type:* *string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```go
func SessionReauthMethodInput() *string
```

- *Type:* *string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```go
func UseOidcMaxAgeInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity"></a>

```go
func MaxInactivity() *string
```

- *Type:* *string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength"></a>

```go
func SessionLength() *string
```

- *Type:* *string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```go
func SessionLengthEnabled() interface{}
```

- *Type:* interface{}

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```go
func SessionReauthMethod() *string
```

- *Type:* *string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```go
func UseOidcMaxAge() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerGcpUserAccessBindingSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingSessionSettings">GoogleAccessContextManagerGcpUserAccessBindingSessionSettings</a>

---


### GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference <a name="GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagergcpuseraccessbinding"

googleaccesscontextmanagergcpuseraccessbinding.NewGoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerGcpUserAccessBinding.GoogleAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



