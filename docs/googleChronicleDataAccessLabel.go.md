# `googleChronicleDataAccessLabel` Submodule <a name="`googleChronicleDataAccessLabel` Submodule" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataAccessLabel <a name="GoogleChronicleDataAccessLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label google_chronicle_data_access_label}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

googlechronicledataaccesslabel.NewGoogleChronicleDataAccessLabel(scope Construct, id *string, config GoogleChronicleDataAccessLabelConfig) GoogleChronicleDataAccessLabel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig">GoogleChronicleDataAccessLabelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig">GoogleChronicleDataAccessLabelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.putTimeouts"></a>

```go
func PutTimeouts(value GoogleChronicleDataAccessLabelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts">GoogleChronicleDataAccessLabelTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleDataAccessLabel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

googlechronicledataaccesslabel.GoogleChronicleDataAccessLabel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

googlechronicledataaccesslabel.GoogleChronicleDataAccessLabel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

googlechronicledataaccesslabel.GoogleChronicleDataAccessLabel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

googlechronicledataaccesslabel.GoogleChronicleDataAccessLabel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleChronicleDataAccessLabel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleChronicleDataAccessLabel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleChronicleDataAccessLabel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataAccessLabel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.author">Author</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.lastEditor">LastEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference">GoogleChronicleDataAccessLabelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.dataAccessLabelIdInput">DataAccessLabelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.udmQueryInput">UdmQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.dataAccessLabelId">DataAccessLabelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.udmQuery">UdmQuery</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.author"></a>

```go
func Author() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.lastEditor"></a>

```go
func LastEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.timeouts"></a>

```go
func Timeouts() GoogleChronicleDataAccessLabelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference">GoogleChronicleDataAccessLabelTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataAccessLabelIdInput`<sup>Optional</sup> <a name="DataAccessLabelIdInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.dataAccessLabelIdInput"></a>

```go
func DataAccessLabelIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UdmQueryInput`<sup>Optional</sup> <a name="UdmQueryInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.udmQueryInput"></a>

```go
func UdmQueryInput() *string
```

- *Type:* *string

---

##### `DataAccessLabelId`<sup>Required</sup> <a name="DataAccessLabelId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.dataAccessLabelId"></a>

```go
func DataAccessLabelId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `UdmQuery`<sup>Required</sup> <a name="UdmQuery" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.udmQuery"></a>

```go
func UdmQuery() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataAccessLabelConfig <a name="GoogleChronicleDataAccessLabelConfig" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

&googlechronicledataaccesslabel.GoogleChronicleDataAccessLabelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataAccessLabelId: *string,
	Instance: *string,
	Location: *string,
	UdmQuery: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.dataAccessLabelId">DataAccessLabelId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.udmQuery">UdmQuery</a></code> | <code>*string</code> | A UDM query over event data. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.description">Description</a></code> | <code>*string</code> | Optional. A description of the data access label for a human reader. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#id GoogleChronicleDataAccessLabel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#project GoogleChronicleDataAccessLabel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts">GoogleChronicleDataAccessLabelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAccessLabelId`<sup>Required</sup> <a name="DataAccessLabelId" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.dataAccessLabelId"></a>

```go
DataAccessLabelId *string
```

- *Type:* *string

Required.

The ID to use for the data access label, which will become the label's
display name and the final component of the label's resource name. The
maximum number of characters should be 63. Regex pattern is as per AIP:
https://google.aip.dev/122#resource-id-segments

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#data_access_label_id GoogleChronicleDataAccessLabel#data_access_label_id}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#instance GoogleChronicleDataAccessLabel#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#location GoogleChronicleDataAccessLabel#location}

---

##### `UdmQuery`<sup>Required</sup> <a name="UdmQuery" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.udmQuery"></a>

```go
UdmQuery *string
```

- *Type:* *string

A UDM query over event data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#udm_query GoogleChronicleDataAccessLabel#udm_query}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. A description of the data access label for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#description GoogleChronicleDataAccessLabel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#id GoogleChronicleDataAccessLabel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#project GoogleChronicleDataAccessLabel#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelConfig.property.timeouts"></a>

```go
Timeouts GoogleChronicleDataAccessLabelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts">GoogleChronicleDataAccessLabelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#timeouts GoogleChronicleDataAccessLabel#timeouts}

---

### GoogleChronicleDataAccessLabelTimeouts <a name="GoogleChronicleDataAccessLabelTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

&googlechronicledataaccesslabel.GoogleChronicleDataAccessLabelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#create GoogleChronicleDataAccessLabel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#delete GoogleChronicleDataAccessLabel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#update GoogleChronicleDataAccessLabel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#create GoogleChronicleDataAccessLabel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#delete GoogleChronicleDataAccessLabel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_chronicle_data_access_label#update GoogleChronicleDataAccessLabel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataAccessLabelTimeoutsOutputReference <a name="GoogleChronicleDataAccessLabelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v15/googlechronicledataaccesslabel"

googlechronicledataaccesslabel.NewGoogleChronicleDataAccessLabelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleDataAccessLabelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleDataAccessLabel.GoogleChronicleDataAccessLabelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



