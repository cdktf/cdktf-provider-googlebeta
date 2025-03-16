# `googleAppEngineDomainMapping` Submodule <a name="`googleAppEngineDomainMapping` Submodule" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineDomainMapping <a name="GoogleAppEngineDomainMapping" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping google_app_engine_domain_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.NewGoogleAppEngineDomainMapping(scope Construct, id *string, config GoogleAppEngineDomainMappingConfig) GoogleAppEngineDomainMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig">GoogleAppEngineDomainMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig">GoogleAppEngineDomainMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings">PutSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideStrategy">ResetOverrideStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetSslSettings">ResetSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSslSettings` <a name="PutSslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings"></a>

```go
func PutSslSettings(value GoogleAppEngineDomainMappingSslSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putSslSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAppEngineDomainMappingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetId"></a>

```go
func ResetId()
```

##### `ResetOverrideStrategy` <a name="ResetOverrideStrategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetOverrideStrategy"></a>

```go
func ResetOverrideStrategy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSslSettings` <a name="ResetSslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetSslSettings"></a>

```go
func ResetSslSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineDomainMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.GoogleAppEngineDomainMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.GoogleAppEngineDomainMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.GoogleAppEngineDomainMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.GoogleAppEngineDomainMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAppEngineDomainMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAppEngineDomainMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAppEngineDomainMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineDomainMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.resourceRecords">ResourceRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList">GoogleAppEngineDomainMappingResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettings">SslSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference">GoogleAppEngineDomainMappingSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference">GoogleAppEngineDomainMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategyInput">OverrideStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettingsInput">SslSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategy">OverrideStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.resourceRecords"></a>

```go
func ResourceRecords() GoogleAppEngineDomainMappingResourceRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList">GoogleAppEngineDomainMappingResourceRecordsList</a>

---

##### `SslSettings`<sup>Required</sup> <a name="SslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettings"></a>

```go
func SslSettings() GoogleAppEngineDomainMappingSslSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference">GoogleAppEngineDomainMappingSslSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeouts"></a>

```go
func Timeouts() GoogleAppEngineDomainMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference">GoogleAppEngineDomainMappingTimeoutsOutputReference</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OverrideStrategyInput`<sup>Optional</sup> <a name="OverrideStrategyInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategyInput"></a>

```go
func OverrideStrategyInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SslSettingsInput`<sup>Optional</sup> <a name="SslSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.sslSettingsInput"></a>

```go
func SslSettingsInput() GoogleAppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OverrideStrategy`<sup>Required</sup> <a name="OverrideStrategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.overrideStrategy"></a>

```go
func OverrideStrategy() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineDomainMappingConfig <a name="GoogleAppEngineDomainMappingConfig" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

&googleappenginedomainmapping.GoogleAppEngineDomainMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Id: *string,
	OverrideStrategy: *string,
	Project: *string,
	SslSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Relative name of the domain serving the application. Example: example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.overrideStrategy">OverrideStrategy</a></code> | <code>*string</code> | Whether the domain creation should override any existing mappings for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.sslSettings">SslSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | ssl_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Relative name of the domain serving the application. Example: example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#domain_name GoogleAppEngineDomainMapping#domain_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverrideStrategy`<sup>Optional</sup> <a name="OverrideStrategy" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.overrideStrategy"></a>

```go
OverrideStrategy *string
```

- *Type:* *string

Whether the domain creation should override any existing mappings for this domain.

By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#override_strategy GoogleAppEngineDomainMapping#override_strategy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}.

---

##### `SslSettings`<sup>Optional</sup> <a name="SslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.sslSettings"></a>

```go
SslSettings GoogleAppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

ssl_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#ssl_settings GoogleAppEngineDomainMapping#ssl_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingConfig.property.timeouts"></a>

```go
Timeouts GoogleAppEngineDomainMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts">GoogleAppEngineDomainMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#timeouts GoogleAppEngineDomainMapping#timeouts}

---

### GoogleAppEngineDomainMappingResourceRecords <a name="GoogleAppEngineDomainMappingResourceRecords" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

&googleappenginedomainmapping.GoogleAppEngineDomainMappingResourceRecords {

}
```


### GoogleAppEngineDomainMappingSslSettings <a name="GoogleAppEngineDomainMappingSslSettings" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

&googleappenginedomainmapping.GoogleAppEngineDomainMappingSslSettings {
	SslManagementType: *string,
	CertificateId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.sslManagementType">SslManagementType</a></code> | <code>*string</code> | SSL management type for this domain. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.certificateId">CertificateId</a></code> | <code>*string</code> | ID of the AuthorizedCertificate resource configuring SSL for the application. |

---

##### `SslManagementType`<sup>Required</sup> <a name="SslManagementType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.sslManagementType"></a>

```go
SslManagementType *string
```

- *Type:* *string

SSL management type for this domain.

If 'AUTOMATIC', a managed certificate is automatically provisioned.
If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#ssl_management_type GoogleAppEngineDomainMapping#ssl_management_type}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

ID of the AuthorizedCertificate resource configuring SSL for the application.

Clearing this field will
remove SSL support.
By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
Example: 12345.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#certificate_id GoogleAppEngineDomainMapping#certificate_id}

---

### GoogleAppEngineDomainMappingTimeouts <a name="GoogleAppEngineDomainMappingTimeouts" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

&googleappenginedomainmapping.GoogleAppEngineDomainMappingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineDomainMappingResourceRecordsList <a name="GoogleAppEngineDomainMappingResourceRecordsList" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.NewGoogleAppEngineDomainMappingResourceRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAppEngineDomainMappingResourceRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get"></a>

```go
func Get(index *f64) GoogleAppEngineDomainMappingResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAppEngineDomainMappingResourceRecordsOutputReference <a name="GoogleAppEngineDomainMappingResourceRecordsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.NewGoogleAppEngineDomainMappingResourceRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAppEngineDomainMappingResourceRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.rrdata">Rrdata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords">GoogleAppEngineDomainMappingResourceRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rrdata`<sup>Required</sup> <a name="Rrdata" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.rrdata"></a>

```go
func Rrdata() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineDomainMappingResourceRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingResourceRecords">GoogleAppEngineDomainMappingResourceRecords</a>

---


### GoogleAppEngineDomainMappingSslSettingsOutputReference <a name="GoogleAppEngineDomainMappingSslSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.NewGoogleAppEngineDomainMappingSslSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineDomainMappingSslSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId">PendingManagedCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput">SslManagementTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType">SslManagementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PendingManagedCertificateId`<sup>Required</sup> <a name="PendingManagedCertificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.pendingManagedCertificateId"></a>

```go
func PendingManagedCertificateId() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `SslManagementTypeInput`<sup>Optional</sup> <a name="SslManagementTypeInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementTypeInput"></a>

```go
func SslManagementTypeInput() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `SslManagementType`<sup>Required</sup> <a name="SslManagementType" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.sslManagementType"></a>

```go
func SslManagementType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineDomainMappingSslSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingSslSettings">GoogleAppEngineDomainMappingSslSettings</a>

---


### GoogleAppEngineDomainMappingTimeoutsOutputReference <a name="GoogleAppEngineDomainMappingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappenginedomainmapping"

googleappenginedomainmapping.NewGoogleAppEngineDomainMappingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineDomainMappingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineDomainMapping.GoogleAppEngineDomainMappingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



