# `googleStorageControlOrganizationIntelligenceConfig` Submodule <a name="`googleStorageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlOrganizationIntelligenceConfig <a name="GoogleStorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfig(scope Construct, id *string, config GoogleStorageControlOrganizationIntelligenceConfigConfig) GoogleStorageControlOrganizationIntelligenceConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig">GoogleStorageControlOrganizationIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig">GoogleStorageControlOrganizationIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetEditionConfig">ResetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter"></a>

```go
func PutFilter(value GoogleStorageControlOrganizationIntelligenceConfigFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleStorageControlOrganizationIntelligenceConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `ResetEditionConfig` <a name="ResetEditionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetEditionConfig"></a>

```go
func ResetEditionConfig()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleStorageControlOrganizationIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleStorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">EffectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfigInput">EditionConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig">EditionConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveIntelligenceConfig`<sup>Required</sup> <a name="EffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```go
func EffectiveIntelligenceConfig() GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filter"></a>

```go
func Filter() GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeouts"></a>

```go
func Timeouts() GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EditionConfigInput`<sup>Optional</sup> <a name="EditionConfigInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfigInput"></a>

```go
func EditionConfigInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.filterInput"></a>

```go
func FilterInput() GoogleStorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EditionConfig`<sup>Required</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```go
func EditionConfig() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlOrganizationIntelligenceConfigConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	EditionConfig: *string,
	Filter: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.name">Name</a></code> | <code>*string</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.editionConfig">EditionConfig</a></code> | <code>*string</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#name GoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `EditionConfig`<sup>Optional</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.editionConfig"></a>

```go
EditionConfig *string
```

- *Type:* *string

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#edition_config GoogleStorageControlOrganizationIntelligenceConfig#edition_config}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.filter"></a>

```go
Filter GoogleStorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#filter GoogleStorageControlOrganizationIntelligenceConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#id GoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleStorageControlOrganizationIntelligenceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts">GoogleStorageControlOrganizationIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#timeouts GoogleStorageControlOrganizationIntelligenceConfig#timeouts}

---

### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig {

}
```


### GoogleStorageControlOrganizationIntelligenceConfigFilter <a name="GoogleStorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigFilter {
	ExcludedCloudStorageBuckets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets,
	ExcludedCloudStorageLocations: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations,
	IncludedCloudStorageBuckets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets,
	IncludedCloudStorageLocations: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `ExcludedCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```go
ExcludedCloudStorageBuckets GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `ExcludedCloudStorageLocations`<sup>Optional</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```go
ExcludedCloudStorageLocations GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `IncludedCloudStorageBuckets`<sup>Optional</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```go
IncludedCloudStorageBuckets GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#included_cloud_storage_buckets GoogleStorageControlOrganizationIntelligenceConfig#included_cloud_storage_buckets}

---

##### `IncludedCloudStorageLocations`<sup>Optional</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```go
IncludedCloudStorageLocations GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#included_cloud_storage_locations GoogleStorageControlOrganizationIntelligenceConfig#included_cloud_storage_locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets {
	BucketIdRegexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```go
BucketIdRegexes *[]*string
```

- *Type:* *[]*string

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#bucket_id_regexes GoogleStorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#locations GoogleStorageControlOrganizationIntelligenceConfig#locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets {
	BucketIdRegexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```go
BucketIdRegexes *[]*string
```

- *Type:* *[]*string

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#bucket_id_regexes GoogleStorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#locations GoogleStorageControlOrganizationIntelligenceConfig#locations}

---

### GoogleStorageControlOrganizationIntelligenceConfigTimeouts <a name="GoogleStorageControlOrganizationIntelligenceConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

&googlestoragecontrolorganizationintelligenceconfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#create GoogleStorageControlOrganizationIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#delete GoogleStorageControlOrganizationIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#update GoogleStorageControlOrganizationIntelligenceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#create GoogleStorageControlOrganizationIntelligenceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#delete GoogleStorageControlOrganizationIntelligenceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/resources/google_storage_control_organization_intelligence_config#update GoogleStorageControlOrganizationIntelligenceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```go
func Get(index *f64) GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">EffectiveEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">IntelligenceConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEdition`<sup>Required</sup> <a name="EffectiveEdition" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```go
func EffectiveEdition() *string
```

- *Type:* *string

---

##### `IntelligenceConfig`<sup>Required</sup> <a name="IntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```go
func IntelligenceConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```go
func BucketIdRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```go
func BucketIdRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">PutExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">PutExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">PutIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">PutIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">ResetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">ResetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">ResetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">ResetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedCloudStorageBuckets` <a name="PutExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```go
func PutExcludedCloudStorageBuckets(value GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `PutExcludedCloudStorageLocations` <a name="PutExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```go
func PutExcludedCloudStorageLocations(value GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `PutIncludedCloudStorageBuckets` <a name="PutIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```go
func PutIncludedCloudStorageBuckets(value GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `PutIncludedCloudStorageLocations` <a name="PutIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```go
func PutIncludedCloudStorageLocations(value GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `ResetExcludedCloudStorageBuckets` <a name="ResetExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```go
func ResetExcludedCloudStorageBuckets()
```

##### `ResetExcludedCloudStorageLocations` <a name="ResetExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```go
func ResetExcludedCloudStorageLocations()
```

##### `ResetIncludedCloudStorageBuckets` <a name="ResetIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```go
func ResetIncludedCloudStorageBuckets()
```

##### `ResetIncludedCloudStorageLocations` <a name="ResetIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```go
func ResetIncludedCloudStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">ExcludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">ExcludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">IncludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">IncludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedCloudStorageBuckets`<sup>Required</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```go
func ExcludedCloudStorageBuckets() GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `ExcludedCloudStorageLocations`<sup>Required</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```go
func ExcludedCloudStorageLocations() GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```go
func IncludedCloudStorageBuckets() GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `IncludedCloudStorageLocations`<sup>Required</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```go
func IncludedCloudStorageLocations() GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `ExcludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```go
func ExcludedCloudStorageBucketsInput() GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `ExcludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```go
func ExcludedCloudStorageLocationsInput() GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `IncludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```go
func IncludedCloudStorageBucketsInput() GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `IncludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```go
func IncludedCloudStorageLocationsInput() GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleStorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigFilter">GoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---


### GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference <a name="GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlestoragecontrolorganizationintelligenceconfig"

googlestoragecontrolorganizationintelligenceconfig.NewGoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlOrganizationIntelligenceConfig.GoogleStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



