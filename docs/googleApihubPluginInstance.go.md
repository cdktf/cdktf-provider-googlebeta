# `googleApihubPluginInstance` Submodule <a name="`googleApihubPluginInstance` Submodule" id="@cdktf/provider-google-beta.googleApihubPluginInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubPluginInstance <a name="GoogleApihubPluginInstance" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance google_apihub_plugin_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstance(scope Construct, id *string, config GoogleApihubPluginInstanceConfig) GoogleApihubPluginInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig">GoogleApihubPluginInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig">GoogleApihubPluginInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig"></a>

```go
func PutAuthConfig(value GoogleApihubPluginInstanceAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApihubPluginInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetActions"></a>

```go
func ResetActions()
```

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetAuthConfig"></a>

```go
func ResetAuthConfig()
```

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetDisable"></a>

```go
func ResetDisable()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.GoogleApihubPluginInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.GoogleApihubPluginInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.GoogleApihubPluginInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.GoogleApihubPluginInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApihubPluginInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApihubPluginInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApihubPluginInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubPluginInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput">AuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput">DisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput">PluginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput">PluginInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable">Disable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin">Plugin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId">PluginInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actions"></a>

```go
func Actions() GoogleApihubPluginInstanceActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList">GoogleApihubPluginInstanceActionsList</a>

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfig"></a>

```go
func AuthConfig() GoogleApihubPluginInstanceAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeouts"></a>

```go
func Timeouts() GoogleApihubPluginInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference">GoogleApihubPluginInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.authConfigInput"></a>

```go
func AuthConfigInput() GoogleApihubPluginInstanceAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disableInput"></a>

```go
func DisableInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PluginInput`<sup>Optional</sup> <a name="PluginInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInput"></a>

```go
func PluginInput() *string
```

- *Type:* *string

---

##### `PluginInstanceIdInput`<sup>Optional</sup> <a name="PluginInstanceIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceIdInput"></a>

```go
func PluginInstanceIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.disable"></a>

```go
func Disable() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.plugin"></a>

```go
func Plugin() *string
```

- *Type:* *string

---

##### `PluginInstanceId`<sup>Required</sup> <a name="PluginInstanceId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.pluginInstanceId"></a>

```go
func PluginInstanceId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubPluginInstanceActions <a name="GoogleApihubPluginInstanceActions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceActions {
	ActionId: *string,
	CurationConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig,
	ScheduleCronExpression: *string,
	ScheduleTimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId">ActionId</a></code> | <code>*string</code> | This should map to one of the action id specified in actions_config in the plugin. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig">CurationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | curation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression">ScheduleCronExpression</a></code> | <code>*string</code> | The schedule for this plugin instance action. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone">ScheduleTimeZone</a></code> | <code>*string</code> | The time zone for the schedule cron expression. If not provided, UTC will be used. |

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.actionId"></a>

```go
ActionId *string
```

- *Type:* *string

This should map to one of the action id specified in actions_config in the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#action_id GoogleApihubPluginInstance#action_id}

---

##### `CurationConfig`<sup>Optional</sup> <a name="CurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.curationConfig"></a>

```go
CurationConfig GoogleApihubPluginInstanceActionsCurationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

curation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#curation_config GoogleApihubPluginInstance#curation_config}

---

##### `ScheduleCronExpression`<sup>Optional</sup> <a name="ScheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleCronExpression"></a>

```go
ScheduleCronExpression *string
```

- *Type:* *string

The schedule for this plugin instance action.

This can only be set if the
plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#schedule_cron_expression GoogleApihubPluginInstance#schedule_cron_expression}

---

##### `ScheduleTimeZone`<sup>Optional</sup> <a name="ScheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActions.property.scheduleTimeZone"></a>

```go
ScheduleTimeZone *string
```

- *Type:* *string

The time zone for the schedule cron expression. If not provided, UTC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#schedule_time_zone GoogleApihubPluginInstance#schedule_time_zone}

---

### GoogleApihubPluginInstanceActionsCurationConfig <a name="GoogleApihubPluginInstanceActionsCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceActionsCurationConfig {
	CurationType: *string,
	CustomCuration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType">CurationType</a></code> | <code>*string</code> | Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration">CustomCuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | custom_curation block. |

---

##### `CurationType`<sup>Optional</sup> <a name="CurationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.curationType"></a>

```go
CurationType *string
```

- *Type:* *string

Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#curation_type GoogleApihubPluginInstance#curation_type}

---

##### `CustomCuration`<sup>Optional</sup> <a name="CustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig.property.customCuration"></a>

```go
CustomCuration GoogleApihubPluginInstanceActionsCurationConfigCustomCuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

custom_curation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#custom_curation GoogleApihubPluginInstance#custom_curation}

---

### GoogleApihubPluginInstanceActionsCurationConfigCustomCuration <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration {
	Curation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation">Curation</a></code> | <code>*string</code> | The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'. |

---

##### `Curation`<sup>Required</sup> <a name="Curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation"></a>

```go
Curation *string
```

- *Type:* *string

The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#curation GoogleApihubPluginInstance#curation}

---

### GoogleApihubPluginInstanceActionsHubInstanceAction <a name="GoogleApihubPluginInstanceActionsHubInstanceAction" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceActionsHubInstanceAction {

}
```


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution {

}
```


### GoogleApihubPluginInstanceAuthConfig <a name="GoogleApihubPluginInstanceAuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfig {
	AuthType: *string,
	ApiKeyConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig,
	GoogleServiceAccountConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig,
	Oauth2ClientCredentialsConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig,
	UserPasswordConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType">AuthType</a></code> | <code>*string</code> | Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig">GoogleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | google_service_account_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig">Oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | oauth2_client_credentials_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig">UserPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | user_password_config block. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#auth_type GoogleApihubPluginInstance#auth_type}

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.apiKeyConfig"></a>

```go
ApiKeyConfig GoogleApihubPluginInstanceAuthConfigApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#api_key_config GoogleApihubPluginInstance#api_key_config}

---

##### `GoogleServiceAccountConfig`<sup>Optional</sup> <a name="GoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig"></a>

```go
GoogleServiceAccountConfig GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

google_service_account_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#google_service_account_config GoogleApihubPluginInstance#google_service_account_config}

---

##### `Oauth2ClientCredentialsConfig`<sup>Optional</sup> <a name="Oauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig"></a>

```go
Oauth2ClientCredentialsConfig GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

oauth2_client_credentials_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#oauth2_client_credentials_config GoogleApihubPluginInstance#oauth2_client_credentials_config}

---

##### `UserPasswordConfig`<sup>Optional</sup> <a name="UserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig.property.userPasswordConfig"></a>

```go
UserPasswordConfig GoogleApihubPluginInstanceAuthConfigUserPasswordConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

user_password_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#user_password_config GoogleApihubPluginInstance#user_password_config}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfig <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig {
	ApiKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey,
	HttpElementLocation: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation">HttpElementLocation</a></code> | <code>*string</code> | The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name">Name</a></code> | <code>*string</code> | The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. |

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey"></a>

```go
ApiKey GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#api_key GoogleApihubPluginInstance#api_key}

---

##### `HttpElementLocation`<sup>Required</sup> <a name="HttpElementLocation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation"></a>

```go
HttpElementLocation *string
```

- *Type:* *string

The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#http_element_location GoogleApihubPluginInstance#http_element_location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#name GoogleApihubPluginInstance#name}

---

### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey {
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig {
	ServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to be used for authenticating request. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#service_account GoogleApihubPluginInstance#service_account}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig {
	ClientId: *string,
	ClientSecret: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | client_secret block. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#client_id GoogleApihubPluginInstance#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret"></a>

```go
ClientSecret GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#client_secret GoogleApihubPluginInstance#client_secret}

---

### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret {
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfig <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig {
	Password: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password">Password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | password block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username">Username</a></code> | <code>*string</code> | Username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.password"></a>

```go
Password GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#password GoogleApihubPluginInstance#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#username GoogleApihubPluginInstance#username}

---

### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword {
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#secret_version GoogleApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubPluginInstanceConfig <a name="GoogleApihubPluginInstanceConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	Plugin: *string,
	PluginInstanceId: *string,
	Actions: interface{},
	AuthConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig,
	Disable: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin">Plugin</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId">PluginInstanceId</a></code> | <code>*string</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable">Disable</a></code> | <code>interface{}</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#display_name GoogleApihubPluginInstance#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#location GoogleApihubPluginInstance#location}

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.plugin"></a>

```go
Plugin *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#plugin GoogleApihubPluginInstance#plugin}

---

##### `PluginInstanceId`<sup>Required</sup> <a name="PluginInstanceId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.pluginInstanceId"></a>

```go
PluginInstanceId *string
```

- *Type:* *string

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another plugin instance in the plugin
  resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#plugin_instance_id GoogleApihubPluginInstance#plugin_instance_id}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#actions GoogleApihubPluginInstance#actions}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.authConfig"></a>

```go
AuthConfig GoogleApihubPluginInstanceAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#auth_config GoogleApihubPluginInstance#auth_config}

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.disable"></a>

```go
Disable interface{}
```

- *Type:* interface{}

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#disable GoogleApihubPluginInstance#disable}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#id GoogleApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#project GoogleApihubPluginInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleApihubPluginInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts">GoogleApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#timeouts GoogleApihubPluginInstance#timeouts}

---

### GoogleApihubPluginInstanceTimeouts <a name="GoogleApihubPluginInstanceTimeouts" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

&googleapihubplugininstance.GoogleApihubPluginInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#create GoogleApihubPluginInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#delete GoogleApihubPluginInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_apihub_plugin_instance#update GoogleApihubPluginInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput">CurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation">Curation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurationInput`<sup>Optional</sup> <a name="CurationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput"></a>

```go
func CurationInput() *string
```

- *Type:* *string

---

##### `Curation`<sup>Required</sup> <a name="Curation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation"></a>

```go
func Curation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceActionsCurationConfigCustomCuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---


### GoogleApihubPluginInstanceActionsCurationConfigOutputReference <a name="GoogleApihubPluginInstanceActionsCurationConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsCurationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceActionsCurationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration">PutCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType">ResetCurationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration">ResetCustomCuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomCuration` <a name="PutCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration"></a>

```go
func PutCustomCuration(value GoogleApihubPluginInstanceActionsCurationConfigCustomCuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `ResetCurationType` <a name="ResetCurationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType"></a>

```go
func ResetCurationType()
```

##### `ResetCustomCuration` <a name="ResetCustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration"></a>

```go
func ResetCustomCuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration">CustomCuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput">CurationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput">CustomCurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType">CurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomCuration`<sup>Required</sup> <a name="CustomCuration" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration"></a>

```go
func CustomCuration() GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">GoogleApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a>

---

##### `CurationTypeInput`<sup>Optional</sup> <a name="CurationTypeInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput"></a>

```go
func CurationTypeInput() *string
```

- *Type:* *string

---

##### `CustomCurationInput`<sup>Optional</sup> <a name="CustomCurationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput"></a>

```go
func CustomCurationInput() GoogleApihubPluginInstanceActionsCurationConfigCustomCuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigCustomCuration">GoogleApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `CurationType`<sup>Required</sup> <a name="CurationType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType"></a>

```go
func CurationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceActionsCurationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get"></a>

```go
func Get(index *f64) GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecution</a>

---


### GoogleApihubPluginInstanceActionsHubInstanceActionList <a name="GoogleApihubPluginInstanceActionsHubInstanceActionList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsHubInstanceActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApihubPluginInstanceActionsHubInstanceActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get"></a>

```go
func Get(index *f64) GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference <a name="GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsHubInstanceActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState">CurrentExecutionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution">LastExecution</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentExecutionState`<sup>Required</sup> <a name="CurrentExecutionState" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState"></a>

```go
func CurrentExecutionState() *string
```

- *Type:* *string

---

##### `LastExecution`<sup>Required</sup> <a name="LastExecution" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution"></a>

```go
func LastExecution() GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList">GoogleApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceActionsHubInstanceAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceAction">GoogleApihubPluginInstanceActionsHubInstanceAction</a>

---


### GoogleApihubPluginInstanceActionsList <a name="GoogleApihubPluginInstanceActionsList" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApihubPluginInstanceActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get"></a>

```go
func Get(index *f64) GoogleApihubPluginInstanceActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApihubPluginInstanceActionsOutputReference <a name="GoogleApihubPluginInstanceActionsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApihubPluginInstanceActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig">PutCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig">ResetCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression">ResetScheduleCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone">ResetScheduleTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCurationConfig` <a name="PutCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig"></a>

```go
func PutCurationConfig(value GoogleApihubPluginInstanceActionsCurationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.putCurationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---

##### `ResetCurationConfig` <a name="ResetCurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetCurationConfig"></a>

```go
func ResetCurationConfig()
```

##### `ResetScheduleCronExpression` <a name="ResetScheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression"></a>

```go
func ResetScheduleCronExpression()
```

##### `ResetScheduleTimeZone` <a name="ResetScheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone"></a>

```go
func ResetScheduleTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig">CurationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction">HubInstanceAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput">ActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput">CurationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput">ScheduleCronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput">ScheduleTimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId">ActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression">ScheduleCronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone">ScheduleTimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurationConfig`<sup>Required</sup> <a name="CurationConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfig"></a>

```go
func CurationConfig() GoogleApihubPluginInstanceActionsCurationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfigOutputReference">GoogleApihubPluginInstanceActionsCurationConfigOutputReference</a>

---

##### `HubInstanceAction`<sup>Required</sup> <a name="HubInstanceAction" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.hubInstanceAction"></a>

```go
func HubInstanceAction() GoogleApihubPluginInstanceActionsHubInstanceActionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsHubInstanceActionList">GoogleApihubPluginInstanceActionsHubInstanceActionList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ActionIdInput`<sup>Optional</sup> <a name="ActionIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionIdInput"></a>

```go
func ActionIdInput() *string
```

- *Type:* *string

---

##### `CurationConfigInput`<sup>Optional</sup> <a name="CurationConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.curationConfigInput"></a>

```go
func CurationConfigInput() GoogleApihubPluginInstanceActionsCurationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsCurationConfig">GoogleApihubPluginInstanceActionsCurationConfig</a>

---

##### `ScheduleCronExpressionInput`<sup>Optional</sup> <a name="ScheduleCronExpressionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput"></a>

```go
func ScheduleCronExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleTimeZoneInput`<sup>Optional</sup> <a name="ScheduleTimeZoneInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput"></a>

```go
func ScheduleTimeZoneInput() *string
```

- *Type:* *string

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.actionId"></a>

```go
func ActionId() *string
```

- *Type:* *string

---

##### `ScheduleCronExpression`<sup>Required</sup> <a name="ScheduleCronExpression" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression"></a>

```go
func ScheduleCronExpression() *string
```

- *Type:* *string

---

##### `ScheduleTimeZone`<sup>Required</sup> <a name="ScheduleTimeZone" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone"></a>

```go
func ScheduleTimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


### GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey"></a>

```go
func PutApiKey(value GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput">HttpElementLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation">HttpElementLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey"></a>

```go
func ApiKey() GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey">GoogleApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---

##### `HttpElementLocationInput`<sup>Optional</sup> <a name="HttpElementLocationInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput"></a>

```go
func HttpElementLocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `HttpElementLocation`<sup>Required</sup> <a name="HttpElementLocation" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation"></a>

```go
func HttpElementLocation() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfigApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


### GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret"></a>

```go
func PutClientSecret(value GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig">PutGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig">PutOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig">PutUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig">ResetGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig">ResetOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig">ResetUserPasswordConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig"></a>

```go
func PutApiKeyConfig(value GoogleApihubPluginInstanceAuthConfigApiKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `PutGoogleServiceAccountConfig` <a name="PutGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig"></a>

```go
func PutGoogleServiceAccountConfig(value GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `PutOauth2ClientCredentialsConfig` <a name="PutOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig"></a>

```go
func PutOauth2ClientCredentialsConfig(value GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `PutUserPasswordConfig` <a name="PutUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig"></a>

```go
func PutUserPasswordConfig(value GoogleApihubPluginInstanceAuthConfigUserPasswordConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig"></a>

```go
func ResetApiKeyConfig()
```

##### `ResetGoogleServiceAccountConfig` <a name="ResetGoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig"></a>

```go
func ResetGoogleServiceAccountConfig()
```

##### `ResetOauth2ClientCredentialsConfig` <a name="ResetOauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig"></a>

```go
func ResetOauth2ClientCredentialsConfig()
```

##### `ResetUserPasswordConfig` <a name="ResetUserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig"></a>

```go
func ResetUserPasswordConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig">GoogleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig">Oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig">UserPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput">GoogleServiceAccountConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput">Oauth2ClientCredentialsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput">UserPasswordConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig"></a>

```go
func ApiKeyConfig() GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">GoogleApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a>

---

##### `GoogleServiceAccountConfig`<sup>Required</sup> <a name="GoogleServiceAccountConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig"></a>

```go
func GoogleServiceAccountConfig() GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a>

---

##### `Oauth2ClientCredentialsConfig`<sup>Required</sup> <a name="Oauth2ClientCredentialsConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig"></a>

```go
func Oauth2ClientCredentialsConfig() GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a>

---

##### `UserPasswordConfig`<sup>Required</sup> <a name="UserPasswordConfig" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig"></a>

```go
func UserPasswordConfig() GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput"></a>

```go
func ApiKeyConfigInput() GoogleApihubPluginInstanceAuthConfigApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigApiKeyConfig">GoogleApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `GoogleServiceAccountConfigInput`<sup>Optional</sup> <a name="GoogleServiceAccountConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput"></a>

```go
func GoogleServiceAccountConfigInput() GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">GoogleApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `Oauth2ClientCredentialsConfigInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialsConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput"></a>

```go
func Oauth2ClientCredentialsConfigInput() GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">GoogleApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `UserPasswordConfigInput`<sup>Optional</sup> <a name="UserPasswordConfigInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput"></a>

```go
func UserPasswordConfigInput() GoogleApihubPluginInstanceAuthConfigUserPasswordConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfig">GoogleApihubPluginInstanceAuthConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword">PutPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPassword` <a name="PutPassword" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword"></a>

```go
func PutPassword(value GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password">Password</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password"></a>

```go
func Password() GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput"></a>

```go
func PasswordInput() GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfigUserPasswordConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfig">GoogleApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---


### GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference <a name="GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword">GoogleApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


### GoogleApihubPluginInstanceTimeoutsOutputReference <a name="GoogleApihubPluginInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapihubplugininstance"

googleapihubplugininstance.NewGoogleApihubPluginInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApihubPluginInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApihubPluginInstance.GoogleApihubPluginInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



