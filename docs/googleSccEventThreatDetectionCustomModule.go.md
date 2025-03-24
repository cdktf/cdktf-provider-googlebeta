# `googleSccEventThreatDetectionCustomModule` Submodule <a name="`googleSccEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccEventThreatDetectionCustomModule <a name="GoogleSccEventThreatDetectionCustomModule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module google_scc_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

googlescceventthreatdetectioncustommodule.NewGoogleSccEventThreatDetectionCustomModule(scope Construct, id *string, config GoogleSccEventThreatDetectionCustomModuleConfig) GoogleSccEventThreatDetectionCustomModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSccEventThreatDetectionCustomModuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

googlescceventthreatdetectioncustommodule.GoogleSccEventThreatDetectionCustomModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

googlescceventthreatdetectioncustommodule.GoogleSccEventThreatDetectionCustomModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

googlescceventthreatdetectioncustommodule.GoogleSccEventThreatDetectionCustomModule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

googlescceventthreatdetectioncustommodule.GoogleSccEventThreatDetectionCustomModule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSccEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSccEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor">LastEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput">ConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState">EnablementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor"></a>

```go
func LastEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts"></a>

```go
func Timeouts() GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput"></a>

```go
func ConfigInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```go
func EnablementStateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState"></a>

```go
func EnablementState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccEventThreatDetectionCustomModuleConfig <a name="GoogleSccEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

&googlescceventthreatdetectioncustommodule.GoogleSccEventThreatDetectionCustomModuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: *string,
	EnablementState: *string,
	Organization: *string,
	Type: *string,
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config">Config</a></code> | <code>*string</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>*string</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization">Organization</a></code> | <code>*string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type">Type</a></code> | <code>*string</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config"></a>

```go
Config *string
```

- *Type:* *string

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#config GoogleSccEventThreatDetectionCustomModule#config}

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```go
EnablementState *string
```

- *Type:* *string

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#enablement_state GoogleSccEventThreatDetectionCustomModule#enablement_state}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#organization GoogleSccEventThreatDetectionCustomModule#organization}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#type GoogleSccEventThreatDetectionCustomModule#type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#display_name GoogleSccEventThreatDetectionCustomModule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```go
Timeouts GoogleSccEventThreatDetectionCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#timeouts GoogleSccEventThreatDetectionCustomModule#timeouts}

---

### GoogleSccEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

&googlescceventthreatdetectioncustommodule.GoogleSccEventThreatDetectionCustomModuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlescceventthreatdetectioncustommodule"

googlescceventthreatdetectioncustommodule.NewGoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



