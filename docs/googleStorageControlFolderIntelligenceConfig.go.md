# `googleStorageControlFolderIntelligenceConfig` Submodule <a name="`googleStorageControlFolderIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlFolderIntelligenceConfig <a name="GoogleStorageControlFolderIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config google_storage_control_folder_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfig(scope Construct, id *string, config GoogleStorageControlFolderIntelligenceConfigConfig) GoogleStorageControlFolderIntelligenceConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig">GoogleStorageControlFolderIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig">GoogleStorageControlFolderIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetEditionConfig">ResetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter"></a>

```go
func PutFilter(value GoogleStorageControlFolderIntelligenceConfigFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleStorageControlFolderIntelligenceConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

---

##### `ResetEditionConfig` <a name="ResetEditionConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetEditionConfig"></a>

```go
func ResetEditionConfig()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleStorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleStorageControlFolderIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleStorageControlFolderIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlFolderIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig">EffectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.trialConfig">TrialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList">GoogleStorageControlFolderIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfigInput">EditionConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfig">EditionConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveIntelligenceConfig`<sup>Required</sup> <a name="EffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```go
func EffectiveIntelligenceConfig() GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filter"></a>

```go
func Filter() GoogleStorageControlFolderIntelligenceConfigFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeouts"></a>

```go
func Timeouts() GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference</a>

---

##### `TrialConfig`<sup>Required</sup> <a name="TrialConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.trialConfig"></a>

```go
func TrialConfig() GoogleStorageControlFolderIntelligenceConfigTrialConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList">GoogleStorageControlFolderIntelligenceConfigTrialConfigList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EditionConfigInput`<sup>Optional</sup> <a name="EditionConfigInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfigInput"></a>

```go
func EditionConfigInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filterInput"></a>

```go
func FilterInput() GoogleStorageControlFolderIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EditionConfig`<sup>Required</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfig"></a>

```go
func EditionConfig() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlFolderIntelligenceConfigConfig <a name="GoogleStorageControlFolderIntelligenceConfigConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	EditionConfig: *string,
	Filter: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.name">Name</a></code> | <code>*string</code> | Identifier of the GCP Folder. For GCP Folder, this field can be folder number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.editionConfig">EditionConfig</a></code> | <code>*string</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier of the GCP Folder. For GCP Folder, this field can be folder number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#name GoogleStorageControlFolderIntelligenceConfig#name}

---

##### `EditionConfig`<sup>Optional</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.editionConfig"></a>

```go
EditionConfig *string
```

- *Type:* *string

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#edition_config GoogleStorageControlFolderIntelligenceConfig#edition_config}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.filter"></a>

```go
Filter GoogleStorageControlFolderIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#filter GoogleStorageControlFolderIntelligenceConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleStorageControlFolderIntelligenceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#timeouts GoogleStorageControlFolderIntelligenceConfig#timeouts}

---

### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig {

}
```


### GoogleStorageControlFolderIntelligenceConfigFilter <a name="GoogleStorageControlFolderIntelligenceConfigFilter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigFilter {
	ExcludedCloudStorageBuckets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets,
	ExcludedCloudStorageLocations: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations,
	IncludedCloudStorageBuckets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets,
	IncludedCloudStorageLocations: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `ExcludedCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```go
ExcludedCloudStorageBuckets GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `ExcludedCloudStorageLocations`<sup>Optional</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```go
ExcludedCloudStorageLocations GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `IncludedCloudStorageBuckets`<sup>Optional</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```go
IncludedCloudStorageBuckets GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_buckets}

---

##### `IncludedCloudStorageLocations`<sup>Optional</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```go
IncludedCloudStorageLocations GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_locations}

---

### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets {
	BucketIdRegexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```go
BucketIdRegexes *[]*string
```

- *Type:* *[]*string

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets {
	BucketIdRegexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```go
BucketIdRegexes *[]*string
```

- *Type:* *[]*string

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

### GoogleStorageControlFolderIntelligenceConfigTimeouts <a name="GoogleStorageControlFolderIntelligenceConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#create GoogleStorageControlFolderIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#delete GoogleStorageControlFolderIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#update GoogleStorageControlFolderIntelligenceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#create GoogleStorageControlFolderIntelligenceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#delete GoogleStorageControlFolderIntelligenceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_storage_control_folder_intelligence_config#update GoogleStorageControlFolderIntelligenceConfig#update}.

---

### GoogleStorageControlFolderIntelligenceConfigTrialConfig <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

&googlestoragecontrolfolderintelligenceconfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```go
func Get(index *f64) GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">EffectiveEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">IntelligenceConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEdition`<sup>Required</sup> <a name="EffectiveEdition" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```go
func EffectiveEdition() *string
```

- *Type:* *string

---

##### `IntelligenceConfig`<sup>Required</sup> <a name="IntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```go
func IntelligenceConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```go
func BucketIdRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```go
func BucketIdRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlFolderIntelligenceConfigFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">PutExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">PutExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">PutIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">PutIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">ResetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">ResetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">ResetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">ResetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedCloudStorageBuckets` <a name="PutExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```go
func PutExcludedCloudStorageBuckets(value GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `PutExcludedCloudStorageLocations` <a name="PutExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```go
func PutExcludedCloudStorageLocations(value GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `PutIncludedCloudStorageBuckets` <a name="PutIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```go
func PutIncludedCloudStorageBuckets(value GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `PutIncludedCloudStorageLocations` <a name="PutIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```go
func PutIncludedCloudStorageLocations(value GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `ResetExcludedCloudStorageBuckets` <a name="ResetExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```go
func ResetExcludedCloudStorageBuckets()
```

##### `ResetExcludedCloudStorageLocations` <a name="ResetExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```go
func ResetExcludedCloudStorageLocations()
```

##### `ResetIncludedCloudStorageBuckets` <a name="ResetIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```go
func ResetIncludedCloudStorageBuckets()
```

##### `ResetIncludedCloudStorageLocations` <a name="ResetIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```go
func ResetIncludedCloudStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">ExcludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">ExcludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">IncludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">IncludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedCloudStorageBuckets`<sup>Required</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```go
func ExcludedCloudStorageBuckets() GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `ExcludedCloudStorageLocations`<sup>Required</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```go
func ExcludedCloudStorageLocations() GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```go
func IncludedCloudStorageBuckets() GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `IncludedCloudStorageLocations`<sup>Required</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```go
func IncludedCloudStorageLocations() GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `ExcludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```go
func ExcludedCloudStorageBucketsInput() GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `ExcludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```go
func ExcludedCloudStorageLocationsInput() GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `IncludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```go
func IncludedCloudStorageBucketsInput() GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `IncludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```go
func IncludedCloudStorageLocationsInput() GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlFolderIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---


### GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleStorageControlFolderIntelligenceConfigTrialConfigList <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigTrialConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleStorageControlFolderIntelligenceConfigTrialConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get"></a>

```go
func Get(index *f64) GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlestoragecontrolfolderintelligenceconfig"

googlestoragecontrolfolderintelligenceconfig.NewGoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig">GoogleStorageControlFolderIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlFolderIntelligenceConfigTrialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig">GoogleStorageControlFolderIntelligenceConfigTrialConfig</a>

---



