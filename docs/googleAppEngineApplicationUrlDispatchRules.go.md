# `googleAppEngineApplicationUrlDispatchRules` Submodule <a name="`googleAppEngineApplicationUrlDispatchRules` Submodule" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineApplicationUrlDispatchRules <a name="GoogleAppEngineApplicationUrlDispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.NewGoogleAppEngineApplicationUrlDispatchRules(scope Construct, id *string, config GoogleAppEngineApplicationUrlDispatchRulesConfig) GoogleAppEngineApplicationUrlDispatchRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig">GoogleAppEngineApplicationUrlDispatchRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig">GoogleAppEngineApplicationUrlDispatchRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putDispatchRules">PutDispatchRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDispatchRules` <a name="PutDispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putDispatchRules"></a>

```go
func PutDispatchRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putDispatchRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAppEngineApplicationUrlDispatchRulesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.GoogleAppEngineApplicationUrlDispatchRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.GoogleAppEngineApplicationUrlDispatchRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.GoogleAppEngineApplicationUrlDispatchRules_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.GoogleAppEngineApplicationUrlDispatchRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAppEngineApplicationUrlDispatchRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAppEngineApplicationUrlDispatchRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineApplicationUrlDispatchRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRules">DispatchRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList">GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRulesInput">DispatchRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DispatchRules`<sup>Required</sup> <a name="DispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRules"></a>

```go
func DispatchRules() GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList">GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeouts"></a>

```go
func Timeouts() GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a>

---

##### `DispatchRulesInput`<sup>Optional</sup> <a name="DispatchRulesInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRulesInput"></a>

```go
func DispatchRulesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineApplicationUrlDispatchRulesConfig <a name="GoogleAppEngineApplicationUrlDispatchRulesConfig" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

&googleappengineapplicationurldispatchrules.GoogleAppEngineApplicationUrlDispatchRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DispatchRules: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules">DispatchRules</a></code> | <code>interface{}</code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#id GoogleAppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#project GoogleAppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DispatchRules`<sup>Required</sup> <a name="DispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules"></a>

```go
DispatchRules interface{}
```

- *Type:* interface{}

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#dispatch_rules GoogleAppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#id GoogleAppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#project GoogleAppEngineApplicationUrlDispatchRules#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.timeouts"></a>

```go
Timeouts GoogleAppEngineApplicationUrlDispatchRulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#timeouts GoogleAppEngineApplicationUrlDispatchRules#timeouts}

---

### GoogleAppEngineApplicationUrlDispatchRulesDispatchRules <a name="GoogleAppEngineApplicationUrlDispatchRulesDispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

&googleappengineapplicationurldispatchrules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules {
	Path: *string,
	Service: *string,
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.path">Path</a></code> | <code>*string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.service">Service</a></code> | <code>*string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.domain">Domain</a></code> | <code>*string</code> | Domain name to match against. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.path"></a>

```go
Path *string
```

- *Type:* *string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#path GoogleAppEngineApplicationUrlDispatchRules#path}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.service"></a>

```go
Service *string
```

- *Type:* *string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#service GoogleAppEngineApplicationUrlDispatchRules#service}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Domain name to match against.

The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#domain GoogleAppEngineApplicationUrlDispatchRules#domain}

---

### GoogleAppEngineApplicationUrlDispatchRulesTimeouts <a name="GoogleAppEngineApplicationUrlDispatchRulesTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

&googleappengineapplicationurldispatchrules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#create GoogleAppEngineApplicationUrlDispatchRules#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#delete GoogleAppEngineApplicationUrlDispatchRules#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#update GoogleAppEngineApplicationUrlDispatchRules#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#create GoogleAppEngineApplicationUrlDispatchRules#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#delete GoogleAppEngineApplicationUrlDispatchRules#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_app_engine_application_url_dispatch_rules#update GoogleAppEngineApplicationUrlDispatchRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList <a name="GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.NewGoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.get"></a>

```go
func Get(index *f64) GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference <a name="GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.NewGoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain"></a>

```go
func ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference <a name="GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleappengineapplicationurldispatchrules"

googleappengineapplicationurldispatchrules.NewGoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



